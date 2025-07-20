export async function GET() {
  const postgresUrl = process.env.POSTGRES_URL;
  return Response.json({ 
    hasPostgresUrl: !!postgresUrl,
    postgresUrlLength: postgresUrl?.length || 0,
    // Don't log the full URL for security
  });
} 