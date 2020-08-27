---
title: Redesigning Smile
date: "Jan, 2019"
slug: "redesigning-smile"
selectedWork: false
---

[Smile Communications](https://smile.com.ng/) is one of Africa’s largest 4G LTE provider. Launched in 2007, Smile currently provides fast and reliable Internet and Voice Services for 4 countries in Africa; Tanzania, Nigeria, The Republic of Congo and Uganda.

Smile’s [objective](https://smilecoms.com/about-us/) is to become the broadband provider of choice for SuperFast data and SuperClear voice as well as provide 300 million potential customers with fast, reliable and high-quality Internet Services.

## Project Scope.

The Smile brand consists of offline and online touchpoints; A few offline shops scattered across the continent and an online dashboard that lets users manage their accounts.

![Smile Desktop](/images/work/old_smile_desktop.png)

![Smile Desktop](/images/work/user_dashboard1.png)

> My focus was to evaluate and improve the online account management experience.

**NB**: This is an unsolicited design. Meaning it is a side project and in no way related to the official Smile Communications.

### Why The Redesign?

I’m not usually a fan of unsolicited redesigns, but while I was thinking of a side project to kick off the year with, Smile’s website was the only annoying thing on my mind.

The site is totally unresponsive, I’ve been a Smile customer for about 2years but I feel like every time’s my first. The curiosity kicked in.

> Are other users finding the site annoying too? What might I learn from making the Smile experience “less annoying”? (Hopefully)

### Design Process

This wasn’t a visual exercise. Even if Smile’s site could do with some visual help, the aim was to explore more sophisticated navigation and IA problems. My process was as follows

1. Run usability tests on the site
2. Synthesize the research data to understand the current problems of the site.
3. Ideate with attempts to solve the problems
4. Design high-fidelity solutions
5. Test for the same issues again.

### Outcome

> As a result of the redesign, the average time to complete tasks fell from 2.94 minutes to 22.57 seconds (88% drop in time on task). Average error per task fell from 9.8 to 0.6 errors per task (94% reduction in error rates).

So let’s dive right in…

## Usability Tests

This is the part where I become nervous and bite my fingers (literally). I had little to no real-life experience running usability tests. My first start was at the office, and then my home. I really wanted to test in some public place, but I think I’ll do that later. Each of the sessions lasted for about 15 minutes.

### Test Participants

My participants had to be Smile’s users or at least potential customers. How would I know them?

1. They make use of the internet daily.
2. They purchase internet bundles frequently.

Based on this, I recruited 3 participants;

1. David- Software Engineer
2. Wale- CEO of a hair salon with free wifi
3. Presh- UX Designer.

### Equipment

Nothing fancy, just Me, Smile’s website on Chrome with my PC running a Windows 10, earphones with microphones, papers, and pen.

### Test aim

The only goal of this test was to

> the changes required to improve the usability and user experience of the site.

### Actionable Objectives

1. Learn if participants are able to complete specified tasks.
2. Identify how long it takes to complete specified tasks and how generally happy users are with the site.

## Persona hypothesis.

I don’t know much about the Smile userbase, neither do I have data-oriented information of their most typical user. A Persona hypothesis was the quickest way to organize my knowledge of the ideal Smile user into a narrative.

![Smile Desktop](/images/work/persona.png "Testing Something")

### Tasks Scenarios

Task Scenarios were crafted to test aspects of the user dashboard. These tasks are key to the smile online experience.

1. Recharge an account
2. Change your profile password
3. Transfer airtime
4. Change data speed
5. Find and edit your profile details
6. Purchase 3gb data
7. Send a message to the customer care

### Test Results

Here’s a table that summarizes the average results of the usability tests before the redesign.

![Usability Tests Result](/images/work/test_results1.png "Usability Tests Result")

### Problem Definition.

After watching the test videos over and over again, I discovered these problems with the site.

**Poor Findability and Navigation**. Users had a hard time finding things on the site. In some cases, they would run around the whole site. When I told them where stuff was, they’ll say something like “Wow this was right under my nose.” Made me sound like a superman😁.

**Poor Typography and Layout**. Here’s what Presh, one of the participants said

> I scrolled down because the write-up was too small for me to see.

**Poor Labeling**. The labels on the sections didn’t give clear hints as to what the items meant. Some users have more than 1 account, here’s how they’re named

1. VICTOR SMILE
2. Smile High-Speed Internet
3. Victor Sim
   Here’s what Wale said about things describing what they do,

> “When I click something, it should take me to the place directly. Without taking me somewhere else.” The redesign was going to focus on improving the Findability, Navigation, Information Architecture, and layout of the site.

## Ideation

> Information Architecture, Sketches, Wireframes, Sitemaps, Card Sorting.

### Information Architecture

The next step was to revisit the present Site Map. This involved me decoupling pages into sticky notes and asking a test participant to sort them into sensible groups.

![Smile's Sitemap](/images/work/old_smile_IA.png "Smile's Current Site Map")

![Card Sorting Results](/images/work/card_sorting1.jpeg "Card Sorting to group related content in sensible categories")

![New Sitemap](/images/work/new_mobile_IA.png "New Site Map informed from the card sorting.")

#### What Changed and Why?

The current IA puts the My Accounts section under the Profile category. From the tests, users didn’t think of things this way. They assumed their Accounts were different from their Smile Profile. Another problem I discovered in the current IA was the unnecessary replication of nodes that made the site more easy to get lost in.

![Smile Accounts](/images/work/old_accounts.png "New Site Map informed from the card sorting.")

### Sketches

![Low-fi Sketches](/images/work/sketch4.jpeg)

![Low-fi Sketches](/images/work/sketch2.jpeg)

### Wireframes

![Wireframes](/images/work/wireframe1.png)

### High Fidelity Designs

And here comes the fun part. 🎉🎉🎉

![High-fi designs](/images/work/high_fidelity.png "High Fidelity Screen designs")

### Not so Fast (Highlights)

A walk through the process. I know almost nothing about Smile’s brand guidelines. The smartest thing to do was keep their color (#75B343), font (Helvetica neue) and Logo (scary).

### The Recharge Experience.

This is the most important part of the Smile online experience. 99% of the times I log in to my Smile Profile, I’m purchasing a data bundle. A vital part of this redesign was making it findable at all times (Hence the top right position).

One issue with the recharge experience was the way the data bundles were organized. Sections like

> Combo plans, flexiData plans, Voice plans, Lite plans, Bumbpa plans, midnight and weekend plans, Anytime plans, Unlimited plans. Jezz😅

This is an entirely effective way for Smile Communications to categorize their data bundles, but for a user like myself, the only 3 things I care about when buying internet bundles are

> The Price, how much Data I’ll get and how long it’ll last me

Based on that, the most sensible classifications are in this order

**Recency**: Based on the fact that most users will buy what they’ve always bought. Or something close.

**Price**: It makes sense to organize the data plans in order of price. So a user knows the categories to look in.

**Data amount and Validity**: Users can choose to sort the list by any of the categories (Recency, Price, Data amount, or Validity).

![Newly Informed Card Sortings](/images/work/card_sorting1.jpeg "Card sorting data bundles according to price")

> I also provided an Input for the user to quickly enter their budget and get data bundles around that price range.

A brief glance at the data plans to list on the left shows different colors. I tried to find out if the colors meant something. Nothing so far, so my intuition is to go all Smile green.

A more info link provides more information about the data plan.

### The Help Experience

Smile has a whole tab in their main navigation dedicated to Customer Help. This is such a cool thing to do… But providing users with 1 inch of space to type in their problems is the opposite of what they’re trying to say.

![Help experience](/images/work/support_desk_before.png "Current site help experience")

![Redesigned help experience](/images/work/support_desk_after.png "Redesigned help experience with affordance to add visual description of the situation")

### Mobile Experience?

Smile’s website on mobile is nothing different from the desktop site. Just a little Pinch, Pinch, Pinch all the way 👌. I don’t know how much of Smile’s users come from mobile, but if what I know applies here, a huge percentage are mobile visitors. Having a pinch-pinch mobile experience in 2019 is a big No No.

At first, it sounded like I could just make the mobile version from the desktop. Which was a totally bad idea. Designing for mobile is a different game altogether.

In order to make only the key experiences close to the user as possible, I had to revisit the IA of the site. Basically shifting away operations that are hardly performed.

![Mobile Information Architecture](/images/work/new_mobile_IA.png "IA for new mobile experience")

### High fidelity mobile experiences

![High fidelity mobile screens](/images/work/high_fidelity_mobile.png "High fidelity mobile screens")

### Outcome

The goal of the redesign project was to

> Identify the changes required to improve the usability user experience of the site. Changes related to Information Architecture, Layout and Typography, Labeling, etc were made.

### How did this impact the UX?

Here’s a [screencast](https://www.youtube.com/watch?v=4NdwaA1juyE) of a user interacting with the redesigned experience.

Running tests on the redesign brought me a lot of joy. The fact that I didn’t need thousands of dollars to test and improve on an experience shifted my perspective about design to the more objective end.

The average time to complete a task for the official Smile website was 2.94 minutes per task.

> (2.5 + 1.8 + 4 + 3.5 + 3.6 + 4 + 1.2mins) / 7 tasks = 2.94minutes

After the redesign, the average time per task went down to 22.57 seconds per task. An 88% improvement.

> (49 + 15+ 16 + 18 + 50 + 10secs) / 7 tasks = 22.6seconds

Average error rates per task in the official Smile website was 9.8 errors per task

> (11 + 0 + 15.6 + 8.6 + 25 + 8.6 + 0 ) / 7 tasks = 9.8 errors per task.

After the redesign, error rates went down to 0.6 errors per task. A 94% improvement.

> ( 0 + 0 + 0 + 4 + 0 + 0 + 0) / 7 tasks = 0.6 errors per task

Here’s a side by side comparison of the average results of usability tests with 3 participants; David, Wale, and Presh.



![High fidelity mobile screens](/images/work/test_results1.png "High fidelity mobile screens")

![High fidelity mobile screens](/images/work/test_results_after.png "High fidelity mobile screens")

> This is much better and Straight forward- Presh.

> This is so easy because everything is been written here — Wale ([5.01](https://www.youtube.com/watch?v=4NdwaA1juyE&feature=youtu.be&t=303))

## Challenges & Learnings.

The biggest challenge was the lack of more detailed data on how Smile customers make use of the product. The tests were run with just 3 participants, which is a smallish number. I think anywhere around 20 would be cool. I could run them in a series of 5 participants per redesign iteration.

Another problem I faced was ignorance of lots of things up front. I didn’t even take a picture of the test scenes 🙉. I didn’t ask for help from the community on time. There’s still lots of room to improve anyways.

### Information Architecture:

One of the reasons, I took up this project was to get me as close as possible into IA. Organizing information in ways people can easily understand is a core skill of a UX Designer. Some resources I went through before starting this project were

1. **Chris How** — Yippee-IA: All You Need To Know About Information Architecture In 10 Minutes ([Link](https://www.youtube.com/watch?v=TsH8y5fbfX8&t))
2. **Chris How** — Digital Experiences and Information Architecture ([Link](https://www.youtube.com/watch?v=qGFF_FhNdY4&t))
3. **Abby Covert** — How to make sense of any mess ([Link](https://www.youtube.com/watch?v=XD2OkDPAl6s&t=))

I hope to learn more about it in coming projects. This story is as long as I don’t want it to be already. Something I also learned while running the tests. Really really take your time to brief users about

1. What the site is.
2. What a Usability test is and why on earth you’re doing it (In straight-forward, plain and understandable language)
3. Be definite about what you want them to do for you.
4. Take out time to write fictions scenarios to give the participants a little context of the task. Instead of saying something like

> Take this app bro, How do you find a barber close to you,

Say something like

> Imagine you moved into a new area. You’ve been around without a hair cut for about 3 weeks now. You really have to get a cut this weekend. How do find a barber close to you with this app.

I also hope to learn more about conducting more advanced Usability Tests. Some resources were useful too.

1. Reporting Usability Test Results ([Link](https://www.usability.gov/how-to-and-tools/methods/reporting-usability-test-results.html))
2. Turn User Goals into Task Scenarios for Usability Testing ([Link](https://www.nngroup.com/articles/task-scenarios-usability-testing/))
