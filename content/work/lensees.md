---
title: Building Lensees
date: "June, 2019"
slug: 'lensees'
selectedWork: true
---

**Role**: UX Strategy, User Research, Interaction design, Engineering.

## The Problem

A newly wedded friend of mine told me a story of how a photographer messed up her wedding memories. In her words…

> He didn't show up on time, shot irrelevant things, and gave a bad delivery experience.

Later that week, I saw a thread of another newly wedded complaining and a somewhat experienced photographer looking for work. I thought...

> What if I could help people find professional photographers for their events?

I decided to solve this problem in the most effortless way possible. I didn't want to build this massive thing and discover no one needed it. My experience at a startup had thought me a lot about validating ideas.

## Research

On day 1, I took out a piece of paper and wrote down some assumptions.

1. Event planners and other creatives would love a one-stop place to find professional photographers around them.
2. Photographers would use a product that directs the demand of jobs to them. Most will benefit from joining the community and being able to set their hourly rates.
3. Photographers will pay a premium to be on the platform.

For the purpose of the experiment, I narrowed focus down to Lagos here in Nigeria. (The largest city in Africa). If things worked, I could then test in other locations too.

## Learning more

In the same evening, I coded a landing page, hosted it on Namecheap, hooked it up with MailChimp and Google Analytics, and reached out to a few photographers on Instagram & [Twitter](https://twitter.com/vick_OnRails/status/1096762414660497409).

A few replied, I told them about the idea and shared a link to an early bird landing page. I got a few emails addresses and a 2 hours long discussion with one of the photographers

**After the research, assumptions 1 & 2 were validated**

1. There's a demand for creative photographers (at least here in Lagos).
2. Most photographers would use a platform that would bring demand directly to them.

## Competitive Research

While interviewing some photographers, I learned about a few services that already existed. I looked into their services and experiences.

1. **Direct**: Exactly offering photographers-around-you services. ( [meetaphotographer.com](meetaphotographer.com), [photographer.org](photographer.org), [cameraman.ng](cameraman.ng) )
2. **Indirect**: Offering substitutes for photographers-around-you services. ([peopleperhour.com](peopleperhour.com) and [groupon.com](groupon.com)'s photography categories)
3. **Comparative**: ([Airbnb.com](Airbnb.com) , [Upwork.com](Upwork.com) ). Not offering anything related, but their experiences can help inform parts of the product.

This analysis gave me a mental model of the industry and clues to building key experiences that are valuable to users.

![Competitive Analysis](./images/competitive_analysis.png)

## Day 2 (Interaction Design)

With the knowledge from my research, I crafted 2 personas; 1 for the demand (event people) and another for the supply side (photographers).

1. Photographer onboarding (For Photographers) and
2. Finding a photographer (For the Demand side)

![Persona 1](./images/personal_bumi.png)

The most important experiences for both were Photographer onboarding (For Photographers) and Finding a photographer (For the Demand side)

> **NB**: Since this is a website, a huge focus was on the mobile version. About 90% of people in Nigeria make use of the internet on their smartphones. And if things go normally, just a very tiny fraction of people will ever see the site on Desktop. While I still design for those scenarios, I sparsely report them in this case study

### Photographer onboarding

The goal of this interaction was to ensure only qualified (have a portfolio on Instagram, unsplash etc) photographers ever sign in.

After brainstorming on ways to ensure this, the fastest and easiest to implement one was to look at the portfolio of every photographer that signs in and send them a code to sign up if they qualify.

While the designer in me knows this is a bad idea, it'll get the job done. I quickly crafted user flows to imagine the experience of photographers joining the platform.

![Flowchart 1](./images/user_journey1.png)

The next steps were to move up the fidelity ladder where most ideas were more solidified.

![Photographer onboarding](./images/screenflow_photographer_onboarding.png)

In order to see things from a different perspective, I watched a user interact with the wireframes.

Some issues regarding copy were raised and fixed. You can watch it on [Youtube](https://www.youtube.com/watch?v=aQkSSlsIJ4E) too.

## Finding a Photographer experience

The second most important experience is for a user to find a photographer. The experience includes 3 stages;

1. Search & getting results of photographers that fit the search,
2. Taking a look at their work,
3. Contacting them.

In order to provide a superb experience, I would need to build a photo gallery (For people to see photographers work), build a messaging service (For people to message the photographers), and a payment gateway (for people to receive payments).

All these would take months to implement and would defeat the aim of launching as fast as possible and fine-tuning in subsequent releases.

I thought of some ways to implement all these with 3rd parties.

1. Mail or Whatsapp for fast messaging.
2. Instagram, personal website or Unsplash for looking at work.
3. User and Photographer handle the payment.
4. Reporting photographers through the platform.

![Mail](./images/user_journey1.png)

![Mail](./images/user_journey2.png)

Going with option A meant users would communicate via their emails. This is more appropriate than having people put out their personal numbers on the Internet. Here's a flow chart imagining the user journey.

You can also see finding a photographer experience an early user going through the interaction on [Youtube](https://www.youtube.com/watch?v=hzjSEd-tjXs)

## Day 3 (High Fidelity Designs)

With the Interaction Framework put in place, the next step was to develop a visual language and a style guide.

![Design Language Components](./images/components.png)

The guide was used to communicate and appeal to a group of visual people. Images were handpicked from the "photographers in Lagos community" as a way to increase emotional investments (With credits).

![High Fidelity screens](./images/high_fidelity_screens.png)

### Desktop?

Catering for the desktop version was an effort to optimize for the less than 10% visiting on Desktop. Here are some high fidelity screens from the project.

![Desktop Screenshots](./images/desktop_interaction.png)

### Not In Lagos?

From the visitors on my analytics, about 60% were outside Lagos and a few photographers have asked for other cities. It's obvious a lot of people outside Lagos would land on the page. That data would obviously be important in determining the next cities and preventing them from joining as Lagos photographers. For this reason, I designed an experience to collect data (email, name, city) of photographers not based in Lagos, promising to notify them first when it launches.

### Locations?

I thought it would be great if people could find photographers directly around them, I plan to work on that immediately after I launch the first version.

### What next?

While I spent just about 3 days researching and designing Lensees, the next step is the core product engineering. I envision this to take about a week of focused work. The bigger goal is to spend about 10 days to put out an MVP. If things go as planned, by mid-march, Lensees should be live.

## Validating Assumptions

A key indicator of value is that people use Lensees to actually find photographers in Lagos. For the next 2–3 months, I'll measure this by the number of people who contact photographers through the platform.

### Assumption 3 is still invalidated

> Will photographers pay a premium to be listed?

I could test this by putting out a premium plan. If people respond fairly, then boom. If they don't, boom.

### Update-2 weeks later

After about 2 weeks of hitting hard to finish up 90% of the engineering (NodeJs & Express) while speaking & interacting with some photographers, I came to learn how small the demand for photography actually is.

I envisioned that the target users would be about-to-weds & event people. The average person weds once in their lifetime & the about-to-weds I spoke to didn't sound like it was solving any real problem for them.

This is me trying to be as realistic as possible. So I made a little movement in the opposite direction. I paused all development & design work, made [a comprehensive list](https://medium.com/@vick_onrails/creative-professional-photographers-in-nigeria-f97872dbf1d4) of photographers in Lagos, Nigeria and published it on Medium.

I believe this step will give me more time to validate the assumptions. The list does the most basic thing (Help people find photographers). If people don't use the list, I'm not going to spend any more time or resource on Lensees. But if people say the list is useful to them, then I'd go ahead to invest more time on the idea & eventually put out the full product.

### Update- 3 weeks later

After speaking to more photographers and event people, I was able to group my ideal user into 2 buckets

Creative people who's jobs depend on working with photographers
People don't need photographers in their everyday lives. (Can go as long as 5 years without needing a photographer)
The first set of people were enormously grateful for the list. Here's what one of them said

> This is going to help me alot. The only way I currently get photographers is through referrers. They're not always the best ones.

### Iterating based on Feedback

I was building too much features for a very simple task.

If a group of people want to find cool photographers, they don't need an account, do they? They don't even need to sign up.

I spent the next day striping Lensees down to a handpicked and hard coded directory of photographers. I also provided a link for photographers who wanted to join the directory

You can take a look at Lensees [here](https://lensees.netlify.com/)

![Lensees MVP](./images/lensees.png)

## Learnings

As a person who's sometimes romantic with ideas, Lensees has honestly taught me how to be scrappy and run small, cheap experiments when the sole aim is validating a hypothesis.
Working on Lensees also helped me think of other important aspects of design like UX Strategy, Communication design (Copy etc) and most importantly Engineering. On the other side, I'm so amazed at how much I could do with little resources once I try to think in term of little experiments.

Another huge learning came as I spoke to the first set of photographers. Most didn't care about the idea until they saw a landing page and the list of photographers. When I think about it now, it makes almost no sense to talk to a group of people and expect them to understand you when you could build a landing page or the smallest working thing to show what you mean.

Thanks for reading
