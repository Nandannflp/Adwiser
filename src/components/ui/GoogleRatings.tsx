import { Star } from "lucide-react"

export function GoogleRatings() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-3xl bg-card border border-border">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-4xl font-bold font-syne text-foreground">4.9</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={i < 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400 fill-yellow-400/50"} size={24} />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground font-medium">Based on 150+ verified reviews</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
        <div className="text-center px-4 py-2 rounded-xl bg-muted/50">
          <p className="text-sm text-muted-foreground mb-1">Quality</p>
          <p className="font-bold">5.0</p>
        </div>
        <div className="text-center px-4 py-2 rounded-xl bg-muted/50">
          <p className="text-sm text-muted-foreground mb-1">Responsiveness</p>
          <p className="font-bold">4.9</p>
        </div>
        <div className="text-center px-4 py-2 rounded-xl bg-muted/50">
          <p className="text-sm text-muted-foreground mb-1">Value</p>
          <p className="font-bold">4.8</p>
        </div>
        <div className="text-center px-4 py-2 rounded-xl bg-muted/50">
          <p className="text-sm text-muted-foreground mb-1">On-time</p>
          <p className="font-bold">4.9</p>
        </div>
      </div>
    </div>
  )
}
