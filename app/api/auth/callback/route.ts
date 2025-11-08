import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  const next = searchParams.get("next") ?? "/dashboard"

  console.log("[v0] Auth callback received, code:", code ? "Present" : "Missing")

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error("[v0] Error exchanging code for session:", error)
      return NextResponse.redirect(`${origin}/auth/error`)
    }

    console.log("[v0] Successfully exchanged code for session")
    return NextResponse.redirect(`${origin}${next}`)
  }

  console.error("[v0] No code provided in callback")
  return NextResponse.redirect(`${origin}/auth/error`)
}
