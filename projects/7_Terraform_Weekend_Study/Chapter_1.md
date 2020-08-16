# Chapter 1: What is Infrastructure as Code? 

Using technology to make changes:
- Easily
- Safely
- Quickly
- Responsibly

Dynamic Infrastructure requires a "Cloud Age" mindset (vs Iron Age).

We'll define 3 Core Practices for implementing Infrastructure as Code. 
1. Define Everything As Code
2. Continuously Validate everything as you work
3. Build your system from small, loosely-coupled pieces


## From Iron Age to Cloud Age


| Iron Age  |  Cloud Age |
|------------------------|------------------------|
| Cost of change is high | Cost of change is low  |
| Changes represent failure | Changes represent learning and improvement |
| Reduce opportunities to Fail | Maximize Speed of improvement | 
| Delivery in Large Batches, test at the end | Deliver small changes, test continuously |
| Long release cycles | Short release cycles |
| Monolithic architectures | Microservices architectures |
| GUI Driven / Physical configuration | Configuration as code | 


## Infrastructure as Code

Infrastructure automation based on practices from software development.

Emphasizes: 
- Consistent / repeatable routines for provision and changing systems and their configuration.


### Benefits of IaC? 

- Using IT Infrastructure as an enabler for rapid delivery of value
- Reducing the effort and risk fo making changes to infrastructure.
- Enabling users of infrastructure to get the resources they need, when they need it.
- Providing common tooling across development, operations, and other stakeholders.
- Creating systems that are reliable, secure, and cost effective. 
- Make governance, security, and compliance controls visible. 
- Improving the speed to troubleshoot and resolve failures. 

## Use IaC to optimize for change

Given that:
- Changes are the biggest risk to a production system
- Continuous change is inevitable
- Making changes is the only way to improve a system

Then it makes sense to optimize your capability to make changes both rapidly and reliably. 

Objections... 

### Objection: "We don't make changes often enough to justify automating them".
In reality, very few systems stop changing, at least before they are retired. 

Some assume that their current level of change is temporary. Others create change request processes to discourage people from asking for changes. Teams supporting actively used systems handle a continuous stream of changes.

A fundamental truth of the Cloud Age: Stability comes from making changes.

Unpatched systems are not stable: they are vulnerable. IF you can't fix issues as soon as you discover them, your system is not stable. If you cannot recovery from failure quickly, your system is not stable. If the changes you do make involve considerable downtime, your system is not stable. If changes frequently fail, your system is not stable.

### Objection: "We should build first and automate later"

Reasons why build afterward are bad ideas: 
- Automation should enable faster delivery, even for new things. Implementing automation after most of the work has been done sacrifices much of the benefits. 
- Automation makes it easier to write automated tests for what you build. And it makes it easier to quickly fix and rebuild when you find problems. Doing this as part of the build process helps you to build better infrastructure.
- Automating an existing system is very hard. Automation is a part of a systems design and implementation. To add automation to a system build without it, you need to change the design and implemenation of the system significantly. This is also true for automated testing and deployment.

### Objection: "We must choose between speed and quality"

There are no tradeoffs between improving performance and achieving higher levels of stability and quality. Rather, high performers do better at all of these measures. 

Organizations can't choose between being good at change or being good at stability. They tend to either be good at both or bad at both.


| Careful  |  Prioritize correctness over speed | Prioritize speed and correctness  | 
| Carless  |  Fragile Mess                      | Prioritize speed over correctness | 
|          |  Slow                              | Fast                              | 

Lower-right quadrant 
- Startup mentality: Move fast and break things. They slide into lowerleft because of their shoddy systems.
Upper-left quadrant
- The careful teams: "We're doing serious and important things, so we have to do things properly". Deadline pressures normally drive to "Workarounds". These workarounds adds to technical debt, and pushes into the Fragile mess. 

Upper right is the goald of lean/agile/Devops. Being able to move quicly and maintain a high level of quality may seem like a fantasy. Research proves many teams do achieve thigs. That's were you're find the "High performers".


#### Why should you automate from the start? 
1. You make changes more often than you may think.
2. It's far easier to automate as you build something than to add it afterward.
3. Automating a the provisioning and configuration of environments ensures consistency from the start.
4. Automation helps you make changes rapidly and reliably. Speed enables quality, and quality enables speed.

## Three Core practices for IaC

- Define everything as code
- Continuously validate all work in progress
- Build small, simple pieces that you can change independently.

### Define everything as code.
This helps by: 
- Reusability
  - If you define a thing as code, you can create many instances of it. You can repair and rebuild your systems quickly. Other people can build identical instances of the thing.
- Consistency
  - Things build from code are built the same way every time.
- Transparency
  - Everyone can see how the thing is build by looking at the code. 

### Continuously validate all your work in progress
Effective infrastructure teams are rigorous about testing. use automation to deploy and test each component of their system. They integrate all the work everyone has in progress. 

More in chapter 9...

### Build small, simple pieces.

Having smaller pieces makes it easier to understand and change.


## The parts of an infrastructure system. 

Its helpful to group parts of the infrastructure into platform layers.

- Infrastructure Platform
  - IaaS
  - An Infrastructure state is a collection of infrastructure resources managed as a unit.
  - Examples:
    - Storage
    - Network Structures
    - Compute Resources
- Application Runtime Platform
  - PaaS
  - Chapter 11
  - Examples:
    - Database Clusters
    - Container Clusters
    - Servers
- Applications
  -   Apps and services running on infrastructure, providing services to your organization and its user.
  -   Examples:
      -   Serverless Code
      -   Container Instances
      -   Application Pacakges











