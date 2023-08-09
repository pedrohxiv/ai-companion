import { currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';

export async function PATCH(
  req: Request,
  { params }: { params: { companionId: string } },
) {
  try {
    const user = await currentUser();
    const body = await req.json();
    const { src, name, description, categoryId, instructions, seed } = body;

    if (!user || !user.id || !user.firstName) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!src || !name || !description || !categoryId || !instructions || !seed) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    if (!params.companionId) {
      return new NextResponse('Companion ID is required', { status: 400 });
    }

    const companion = await prismadb.companion.update({
      where: {
        id: params.companionId,
        userId: user.id,
      },
      data: {
        userId: user.id,
        userName: user.firstName,
        src,
        name,
        description,
        instructions,
        seed,
        categoryId,
      },
    });

    return NextResponse.json(companion);
  } catch (error) {
    console.error('[COMPANION_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { companionId: string } },
) {
  try {
    const user = await currentUser();

    if (!user || !user.id || !user.firstName) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!params.companionId) {
      return new NextResponse('Companion ID is required', { status: 400 });
    }

    const companion = await prismadb.companion.delete({
      where: {
        id: params.companionId,
        userId: user.id,
      },
    });

    return NextResponse.json(companion);
  } catch (error) {
    console.error('[COMPANION_DELETE]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
