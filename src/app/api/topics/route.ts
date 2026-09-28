import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();
    
    const targetUrl = `https://api.freenewsapi.io/v1/topics${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(targetUrl, {
      headers: {
        'x-api-key': process.env.FREE_NEWS_API_KEY as string,
        'accept': 'application/json',
      },
    });

    const data = await response.json();
    
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch news data' },
      { status: 500 }
    );
  }
}
