export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        {/* Logo */}
          <img src="/logo.svg" alt="Logo" className="h-77 w-239" />

        {/* Caption */}
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          An Agentic Meal Planner
        </p>

        {/* Coming Soon */}
        <div className="pt-4">
          <p className="text-2xl font-bold text-orange-600">Coming Soon...</p>
        </div>
      </div>
    </div>
  )
}
