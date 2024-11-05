import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function JobCard({ job, isActive, direction }) {
    const tagColors = {
      orange: "bg-orange-50 hover:bg-orange-50 text-orange-500",
      emerald: "bg-emerald-50 hover:bg-emerald-50 text-emerald-500"
    }
  
    const cardClasses = isActive
      ? "z-20 scale-100 opacity-100"
      : `z-10 scale-90 opacity-70 ${
        direction === 'left' ? '-rotate-[20deg] -translate-x-16' : 'rotate-[20deg] translate-x-16'
      }`
  
    return (
      <Card className={`w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] p-5 shadow-lg absolute transition-all duration-500 ${cardClasses}`}>
        <CardContent className="p-0 space-y-4">
          <div className="flex justify-between items-start">
            <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white text-sm">
              <img src={`${job.logo}`} alt="logo" />
            </div>
            <Badge variant="outline" className="text-emerald-500 bg-emerald-50 border-emerald-200 rounded-full">
              Full Time
            </Badge>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-xl">{job.position}</h3>
            <p className="text-sm text-muted-foreground">{job.company} · {job.location}</p>
            <p className="text-sm text-muted-foreground">
              {job.description}
            </p>
          </div>
  
          <Badge 
            variant="secondary" 
            className={`rounded-full ${tagColors[job.tagColor]}`}
          >
            {job.tag}
          </Badge>
        </CardContent>
      </Card>
    )
  }

  export default JobCard