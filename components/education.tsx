export function Education() {
  return (
    <section id="education" className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Tech Launch Academy</h3>
          <p className="text-muted-foreground">Jan 2023 - Aug 2023</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Miami Killian Senior High School</h3>
          <p className="text-muted-foreground">Graduated Jun 2018</p>
          <p>Cambridge Diploma</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Certifications</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>CompTIA Network+ Certification</li>
            <li>Google Technical Support Fundamentals</li>
            <li>CompTIA IT Fundamentals (ITF+) Certification</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

