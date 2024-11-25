import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "VoIP System Integration", level: 90 },
  { name: "Network Configuration", level: 95 },
  { name: "Network System Design", level: 85 },
  { name: "Connectivity Troubleshooting", level: 92 },
  { name: "Customer/Remote/Escalation Support", level: 88 },
  { name: "IT Infrastructure Planning", level: 80 },
  { name: "Personnel Training", level: 85 },
  { name: "Ticket Management", level: 90 },
  { name: "Remote Support", level: 93 },
]

export function Skills() {
  return (
    <section id="skills" className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium">{skill.name}</span>
              <span className="text-sm font-medium">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="w-full" />
          </div>
        ))}
      </div>
    </section>
  )
}

