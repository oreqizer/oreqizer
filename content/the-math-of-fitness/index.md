+++
title = "The math of fitness"
date = 2021-12-13
draft = true

[taxonomies]
tags = ["gains", "health"]
+++

_Fitness_ is one of the most bastardized terms in the industry. No one really
knows what does the word mean. Some interpret it as low-enough body fat. Others
consider people with great endurance to be fit, such as marathon runners.
Strength and muscle is often an indicator of fitness as well. The list goes on.

I am going to offer a mathematical interpretation of fitness, along with
practical implications that arise in context of life and sport performance.
These ideas are not new. In fact, Greg Glassman, founder of CrossFit, has talked
about this interpretation multiple times during his presentations[^1]. I want to
build upon his ideas and introduce a robust framework for _training for a better
life_.

# Definition

If you search for the term "fitness", you get a bunch of definitions:

![Fitness definition](./fitness-definition.png "Fitness definition")

The first definition, "the condition of being physically fit and healthy" is
ambiguous — how should one interpret "fit"? Most people will give completely
different answers.

The second definition, "the quality of being suitable to fulfil a particular
role or task" is more interesting. Applying it on the prior definition, we can
define "fit" as "being physically able to function in life".

This means that a person can list tasks they want to be able to perform, then
gauge their _fitness_ based on their performance executing said tasks. For
example, one may want to:

- do some household stuff like organize items, carry suitcases to the car
- play with their kids, toss them around, participate in outside games
- do leisure sports such as snowboarding, hiking, bowling
- do intellectual activities for relaxation

For this person, fitness means being able to perform these actions with ease,
ideally into a very old age. They want to be productive at their job, lead an
active lifestyle with family and friends and still have some energy left for
books and video games in the evening.

# Abstraction

Consider the following activities:

- running, swimming, cycling
- snatch, clean, jerk, squat, press, deadlift
- carrying a suitcase, placing bricks on top of each other
- cooking, cleaning, chasing a toddler

What exactly happens when we perform these activities? What do they have in
common? In cycling, we're pressing pedals at a certain pace. When carrying a
suitcase, we're moving objects through space. Placing bricks involves lifting
and moving objects. Chasing a toddler is basically lifting an object and
running. Household chores involve a lot of item micromanagement. Snatch and
those other lifts involve displacing a heavy ass weight.

You may start noticing a pattern here. Moving and lifting objects, pressing
pedals, running. They all involve _doing work_ within a certain _time_, either
via exerting force for a certain distance by grabbing and moving an object or
moving feet, or even just spending energy by performing certain tasks like
stirring soup.

Doing **work** within a certain **time** is in fact the formula for **power**:

```
TODO draw and graph this:
P = dW / dt
```

As we established previously, a fit person has the ability to _perform his
desired tasks_. In other words, they're able to _produce enough power for the
given period of time_ in the _context_ of the task.

## Work capacity

How do we optimize our ability to perform the tasks we want, participate in
sports, thus increase our "fitness"? With power being the common variable, we
want to be able to _exert as much power as possible for a certain period of
time_ in a specific context. In other words, we want to be able to _perform as
much work as possible within a time frame_.

In the following section, I am going to intentionally disregard context
specificity for a while. Doing so will allow me to put clear focus on the
abstract idea I want to present. Context specificity will be reintroduced later
when we'll start bringing focus back to practical implications.

Consider the following formula that calculates **work** done by exerting
**power** over a period of **time**:

```
TODO draw and graph this:
W = t=0_int^T P(t) * dt
```

For a specific time `T`, in order to maximize work capacity `W`, we have to
maximize the _area under the curve_ of the graph. That means maximizing average
power `P` within the time.

The amount of work we can produce within a certain time is our _work capacity_
for that time frame.

## Work spectrum

Maximizing work capacity in just a single time frame is very limiting. We want
to maximize our work capacity across a _broad time domain_. Going up a
dimension, we can illustrate a _spectrum of work capacities_, which is the
volume under the plane formed by _work capacities of different time frames_. I
am going to call it _work spectrum_:

```
TODO draw and graph this:
WS = s=0_int^S t=0_int^s P(t, s) * dt
```

Within the time domain from zero to `S` we calculate our _work capacity_ in each
time frame. To maximize the _volume under the plane_ of the graph we have to
maximize the average power `P` for each time frame.

## Context specificity

The established _work spectrum_ formula assumes a seamless carryover between
contexts, meaning that having a certain work capacity in one context means
having the same capacity in all contexts. This assumption, however, violates the
rule of context specificity[^2].

Adding a _broad spectrum of contexts_ to the formula finally gives us the
mathematical representation of **fitness**:

```
TODO draw and graph this:
Fitness = i=0_sum^n (s=0_int^S t=0_int^s P(t, s, Ci) * dt) / n
```

For each context `Ci`, we calculate _work capacity_ for that context in a broad
time domain from zero to `S`. To maximize _fitness_, we have to maximize _volume
under the plane_ for each context's _work spectrum_, meaning we have to maximize
the average power `P` for each time frame in each context.

As Glassman said it[^3]:

> Fitness is work capacity measured across broad time and modal domains.

This means that when we are improving our fitness, we're improving our ability
to execute _every possible task_ in a _broad time domain_, be it running,
lifting or carrying stuff, chores, babysitting, building a house. You name it.

# Buffering

One may wonder, why should we _maximize_ our fitness? Isn't being _fit enough_
to be able to do our intended tasks sufficient?

The short answer is **no**. We'll go through reasons why we want to _buffer_ as
much fitness as possible, as soon as possible.

## Aging

As humans age, we lose power[^4], strength[^5] and endurance[^6], all direct
components for power production over a period of time, in a %-based manner. This
implies that our _power across every age_ function is _continuous_:

```
TODO draw
^ power
| -\
____> age
```

This loss of power directly affects the formula for _fitness_, because we
gradually lose the ability to _produce power in all contexts and across the
whole time domain_. Graphing a person's fitness across his life very much
resembles the declining power function:

```
TODO
^ fitness
| -\
____> age
```

Let's assume a curve of a person's desired _minimal fitness_, indicating how fit
this person wants to be at a given age. This can for example mean that an
elderly person wants to be able to play with his grandchildren, carry groceries,
hike and do gardening work on weekends. When younger, they also wanted to play
sports and compete, be productive at work and handle chores. Their minimal
fitness curve would look something like this:

```
TODO
^ fitness
| -\
| ---- curve
|    \
____> age
```

When their fitness falls fall under the curve, they lose the ability to perform
some of their desired activities, and the deeper they are, the more ability they
lose.

How do we ensure delaying falling under our personal minimal fitness curve?
Because losing fitness is gradual, the answer is simple — **buffer as much
fitness as possible**!

Consider two graphs for the same person. In one, they only trained their fitness
slightly. In the other, they tried to maximize their fitness the best their
lifestyle allowed them to:

```
TODO make two of these, one crosses at 45, one at 85
^ fitness
| -\
| ----- curve
|    \
_____> age
```

Notice how in the first graph, they cross their minimal fitness curve at around
the age of 45, while in the other graph they do so at 85. This means that
maximizing fitness allowed them to _live to their full potential for 40 more
years_!

While this is all presented using abstract math, the impact of fitness
improvements during aging is well-established[^7], including the benefits of
resistance training[^8][^9], aerobic and anaerobic training[^10][^11], and power
training[^12]. Fitness literally _is physical health_.

## Perceived exertion

Imagine having to carry a bunch of groceries across a huge parking lot at a mall
on a hot summer day. Heavy ass ones, with bottled water and a watermelon and
everything. The total weight being what you can barely handle. How tired would
you be after the trip? You'd probably be catching breath for a couple of
minutes, hands shaking, and sweating like a jazzman at midnight on live
television.

The work you performed was near your _work capacity_ in the context of this
grocery trip. Your _perceived exertion_ of this trip is inversely proportional
to how close the _total work done_ is to your _work capacity_ in this context.
Let's illustrate perceived exertion in percent using a graph of our power
output:

```
TODO
^ power
| ------- max power
| ------- performed power
|
|
---------> time

PE = W / W_max * 100%
   = ~90%
```

The perceived exertion `PE` is calculated as the total work done `W` over our
work capacity `W_max` in the given context and time frame, multiplied by `100`
to get the percent.

A commonly used ranking system is **Rating of Perceived Exertion**, or **RPE**
for short. For simplicity, an implementation that could be applied in our
example is simply transferring percent to a 1-10 numeric scale by rounding:

| Perceived exertion | RPE |
| ------------------ | --- |
| 0-14%              | 1   |
| 15-24%             | 2   |
| 25-34%             | 3   |
| ...                | ... |
| 75-84%             | 8   |
| 85-94%             | 9   |
| 95-100%            | 10  |

In our groceries example, let's say we performed around 9/10 work of our max
potential. This means our perceived exertion would be at _90%_, or _RPE 9_.

Now imagine a second scenario where the groceries would be 1/3 of the weight we
can handle. You'd probably just casually walk to your car, put them there,
started your car and drove off home. The graph of your power output would look
like this:

```
TODO
^ power
| ------- max power
|
|
| ------- performed power
---------> time

PE = W / W_max * 100%
   = ~30%
```

Suddenly our perceived exertion of carrying groceries drops from RPE 9 to RPE 3.

You may wonder, how do we go about lowering our RPE, if we actually need to
carry all the heavy groceries? Well, simply by **increasing our work capacity**!
We cannot make groceries lighter, but we can _become stronger_ so that the
groceries _seem lighter to us_.

Same goes for grandparents chasing their grandchildren around — increasing their
endurance makes playing with kids much easier by dropping RPE significantly,
allowing grandparents to play longer, recover faster and literally making the
whole experience much more enjoyable.

Improving fitness literally _makes living life easier_. Tasks tire you less
short-term[^13] and you accumulate less fatigue in general[^14]. Your baseline
energy levels will improve[^15]. You literally drop your life RPE by **buffering
your fitness**!

Again, evidence about buffering fitness goes beyond math and RPE. Increased
energy levels happen at the cellular level by improving mitochondria
health[^16][^17], and that is achieved by training[^18]. There's even a
study[^19] confirming that the _more exercise you can do and recover from the
better_, even at top intensities (particularly for women).

# Implications

Now that we established the _formula for fitness_ and why we want to _maximize
fitness_, we're going to bring the abstract idea that was presented back to
earth, focusing on specifics of human physical development.

## Foundation

There are ten commonly recognized fitness domains[^20], split into four
_physical_, four _neurological_ and two _combined_ domains.

The _physical_ domains cause alterations in body tissues when developed:

1. Endurance - Performing an activity for an extended period of time
2. Stamina - Performing an activity for a period of time at maximal effort
3. Strength - Force production in a given context
4. Flexibility - Maximizing range of motion of a joint

The _combined_ domains cause both tissue adaptations and skill development:

5. Power - Applying maximum force in minimum time
6. Speed - Minimizing time cycle of a repeated movement

The _neurological_ domains are purely skill-based:

7. Coordination - Combining movement patterns to a single movement
8. Agility - Minimizing transition time from one movement pattern to another
9. Balance - Controlling the body's center of gravity in relation to its support
   base
10. Accuracy - Controlling movement in a given direction or intensity

While everybody strives for at least _some_ level of competence in all of these
domains, the person's lifestyle and goals ultimately dictate the importance of
each one domain.

In addition, not all domains are created equal. Consider the formula for _work_
and _power_:

```
TODO
W = F * d
P = dW / dt
```

As you can see, work `W` is composed of _force production_ for a _distance_.
Power `P` is work done as quickly as possible. Work can also be expressed as
area under the curve of a function of _power_ for a certain _time_, as we did in
earlier chapters. Either way, to maximize work, we have to maximize _force_ and
_distance_, or maximize _time_ while maintaining _power_.

The four common variables in the formulae that we strive to maximize are:

- **Power** itself
- Force production, ergo **strength**
- Distance, ergo **endurance**
- Time while maintaining power, ergo **stamina**

These are what I call the _developmental fitness domains_, ones that we strive
to develop to their maximum at all times, as they are the ones that maximize our
fitness.

The rest of the fitness domains, that is flexibility, speed, coordination,
agility, balance and accuracy, are _elementary fitness domains_. Being
proficient enough in them is necessary to work on _developmental fitness
domains_ in an optimal and safe way. However, trying to maximize them brings
little to no benefit[^21].

## Power curve

Choosing how to balance training individual developmental domains, as well as to
what extend should we work on elementary domains, is highly individual. There
are two general cases, however, that should be considered:

- Focused development for sport-specific needs
- Balanced development for improving everyday life

_Focused development_ means favoring one spectrum of time domain when developing
work capacity by focusing primarily on certain developmental domains, training
others only to a point that _does not interfere with their sport's primary
focus_.

For example, powerlifters focus on getting as _strong_ as possible,
weightlifters maximize their _power_. Both of these sports favor the very
beginning of the time domain, creating a steep power curve:

```
TODO
^ power
|\
| \______ str/pow
---------> time
```

On the contrary, long-distance runners and cyclists maximize _endurance_, which
develops the complete opposite of the time domain, thus creating a much flatter
curve:

```
TODO
^ power
|____      end
|    ----
---------> time
```

These athletes focus on their sport first and foremost. Anything else is
peripheral for them.

_Balanced development_ means splitting effort put into developmental domains in
a balanced way, maybe favoring some due to personal preference. This means
becoming sort of a _jack-of-all-trades_ if you will, being _great at everything_
yet _perfect at nothing_.

Instead of going all-in in one time spectrum and then just barely in the rest,
you focus on being proficient everywhere and filling gaps where they pop up,
creating a balanced power curve. This approach builds the most fitness —
maximizes work capacity across the time domain:

```
TODO
^ power
|-__
|   \--__ balanced
---------> time
```

Balanced development is ideal for improving everyday life, since you gather all
of the health benefits of all fitness domains, are able to perform all tasks at
a low RPE, and a cherry on top is that this approach builds, according to many,
the best physique possible! :fire:

# Training

We've talked about _what_ we want to achieve and _why_ we want to achieve it
quite enough, now let's look at _how_ to achieve our fitness goals.

As Mark Rippetoe summed it up[^22]:

> Training is physical activity done with a longer-term goal in mind, the
> constituent workouts of which are specifically designed to produce that goal.

Our overarching goal is increasing work capacity, and training is going to
reflect that. Because we want to cover a broad time and modal domain, training
is going to adapt to address any weaknesses that pop up, while maintaining
constant progression in our developmental fitness domains.

## Movements

Because it is impossible to train explicitly for every single activity we want
to do in life, we have to identify the _most complete set of movements_ to fit
our goals. Our base movement set contains patterns for our most complete
development. In addition, we include movements that are sport-specific if we
practice a sport.

Different authorities specify different _movement patterns_ when classifying
_basic movement patterns_. I am going to pick the most prevalent ones you can
find:

- Squat
- Hinge
- Lunge
- Push
- Pull
- Carry

The majority of specific movements and human activities are composed of these
patterns, thus our training will revolve around developing them.

Next, we classify movements based on their developmental purpose:

- _Monostructural_ movements enhance _aerobic and anaerobic capacity_
- _Strict_ movements are ideal for increasing _strength_ and _hypertrophy_
- _Power_ movements allow maximal _power_ output

Finally, to pick specific movements we want to develop, we can look at existing
sports for inspiration, since they contain a plethora of awesome movements to
choose from. This is what CrossFit does. The more we pick the better, the more
well rounded our fitness will be! :muscle:

All three lifts of **powerlifting** — the _squat_, _deadlift_ and _bench press_,
together with the _strict press_, are awesome for developing both strength and
hypertrophy. As barbell movements, they're highly loadable and have great
carryover to other movements.

The sport of **weightlifting** has the most loadable barbell power movements out
of all disciplines. The _clean & jerk_ and _snatch_ require great mobility and
their technical nature develops coordination and balance. These movements can
also be performed with kettlebells or dumbbells.

Working with one's own body with **gymnastics** builds enormous relative upper
body strength, trunk stability, balance, coordination and agility. The core
strict movements are the _pull-up_, _dip_, _push-up_, _rope climbs_,
_handstands_ and _leg raises_. Power movements include the _muscle-up_, _jumps_
and kipping versions of strict movements. Because bodyweight is the main loading
factor, being rather lean is a big advantage.

The disciplines found in **strongman** include _carrying_, _displacing_ and
_tossing_ odd objects in various ways. These movements have awesome carryover to
everyday life, challenge coordination and balance, build stability and are great
for raw power output.

While **bodybuilding** has been often frowned upon for being pure vanity, its
isolation exercises are great for building muscle mass with minimal fatigue cost
and for addressing muscular weak points. They are also a viable prehab and rehab
tool.

Finally, the **monostructural** movements like _running_, _air bike_, _rower_,
_skierg_ and _jump rope_ are perfect for building aerobic and anaerobic
capacity. In addition, machines are very practical for targeted intensity
training for improving VO2 max and lactic threshold.

## Benchmarks

Our previously established formula for fitness displays a perfect world with
infinitely many contexts across the whole time domain. This is impossible to
measure in real life. We need a way to best _estimate_ our fitness, and the best
way is to create a finite dataset that we can interpolate.

In real life tasks, _context_ and _time_ are inherently interconnected. All
tasks take similar time. Carrying groceries usually takes a few minutes. Running
5k is mostly done under half an hour. A snatch is completed within a couple of
seconds. Thus, we will consider _time_ to be a part of _context_ and reflect
this in our formula for fitness:

```
TODO
Fitness = i=0_sum^n (t=0_int^Ci.t P(t, Ci) * dt) / n
```

Benchmarks are a way to assert that our _fitness is improving over time_. They
are measurable workouts that show our _work capacity in a specific context_.
Benchmarks should cover the whole time domain in many contexts to give the best
estimate of our fitness.

Because it is impossible to measure power across a workout, we have to use a
_scoring system_. We dedicate a _single measurable variable_ by which we score
the workout. For example, how much _weight_ we lift for 1 reps, or 5 reps. In
what _time_ can we run a 5k. How many _rounds_ of a circuit workout can we do in
15min.

How many benchmarks we choose is up to us, depending on how many skills we want
to master and whether we have sport-specific priorities. A well-rounded set
contains at least the following:

- Max weight on the snatch and clean & jerk
- 1 or 5 rep max on the basic lifts — squat, deadlift, bench press, strict press
- Max reps and maybe max weight on basic gymnastics — pull-ups, dips, HSPUs
- Max distance for 1.5x bodyweight farmer carry
- Metcons with various movements of length roughly 5min, 12min, 25min for max
  rounds or for time, the more variety the better
- 5k run for time

This set covers absolute strength and power, strength endurance, relative
strength. Metcons make sure you're versatile in your power expression and
skillset, as well as different effort lengths and well-developed anaerobic
capacity. Last, having a monostructural benchmark asserts our aerobic capacity.

If we could measure work done in each of the benchmarks and interpolate the
results, the graph of our fitness would look something like this:

```
TODO graph this how CF has it at
https://www.crossfit.com/cf-seminars/CertRefs/CF_Manual_v4.pdf page 23
except use work across time spectrum, not power
```

Feel free to add anything measurable that translates well to your life. A mother
of a toddler? Try sandbag carries for distance and max rep sandbag cleans. Hope
to improve your cross-country skiing performance? Skierg for max calories in
10min. Want a glorious butt? :peach: Add in max weight on 10 reps of hip
thrusts. Be creative!

To monitor your fitness progress, keep a track of all your scores somewhere
handy, like your favorite note app on your phone. Test them every 3-6 months.
Use them as a reference for what is going well and what you need to improve.

## Adaptations

Training adaptations can be grouped into three groups that work complementary
fitness domains:

- _Base_ - building muscle mass, increasing strength and power
- _Engine_ - improving aerobic and anaerobic endurance and stamina
- _Skill_ - increasing flexibility, speed, and eliminating movement constraints

Each group has its own purpose and complements the other groups.

### Base

Large chunk of your training should be centered around building your base by
growing muscle and maximizing your strength and power. Becoming stronger and
more powerful boosts your short-duration power curve and greatly increases your
endurance potential:

```
TODO
^ draw power boost at start
| -\ _____ power potential (before was lower)
|   \_____ current endurance
---------> time
```

Having a period of focused _hypertrophy_ training builds foundation for all
other base adaptations[^23]. Exercises for building muscle are done with
controlled form and emphasis on the eccentric part. These blocks of training are
also important as a injury prevention tool and for targeting weak points.

Training for _strength and power_ involves progressive overload[^24] of the
weight on the bar, muscular and neural adaptations and improvements in technique
for lift efficiency. Maximizing strength and power builds strength reserve[^25],
which makes submaximal effort much less fatiguing, thus allowing greater volume.

### Engine

Building a massive engine to run your base means maximizing _aerobic_ and
_anaerobic capacity_, along with related modalities. It allows you to fully
express your power for the longest time possible:

```
TODO
^
|-\______ power
|
---------> time
```

The moderate intensity, steady workouts build _aerobic capacity_ as an endurance
base and they improve fuel efficiency. These are your basic 5k jogs at an
aerobic pace. You only need about one to two of these a week outside of focused
blocks.

To train _lactate threshold_, include longer duration intervals with little rest
between sets, for example 3min intervals at threshold pace with 1min active
rest. You can also do a 20-30 min continuous effort at threshold pace. Again, no
need to overdo it, once or twice a week is enough when specializing.

Improving your _VO2 max_ and _speed endurance_ is a different beast. _HIIT_
style workouts work best here, with all-out intervals for 30-60s and about the
same absolute or active rest. These bring unique benefits even to the advanced
endurance athlete[^26]. Like always, once a week, or more in a dedicated block.

The absolute best way to improve _anaerobic capacity_ and overall _work
capacity_ is via _AMRAP_ or _for-time_ metcons. This is because of the variety
they bring. These have the greatest carryover to your work capacity, by far!
:weight_lifting_woman: Be sure to build a solid base of strength, power and
aerobic endurance first before you hop onto these.

### Skill

All the movements you do when training need some level of technical competence
to perform effectively. Unless speaking about sport-specific skills, the level
you want to be good in them really comes down to your _learning budget_. You'd
ideally want to master everything of course, but in the real world, we have to
prioritize.

Skills need a certain amount of learning time to achieve _basic proficiency_,
and this time differs greatly between skills. For example, the deadlift can be
self-taught rather quickly, but a snatch takes weeks of consistent practice.
This learning curve is used as a large factor in practice prioritization:

- easy skills are enough to practice during _warmups_ and _actual workouts_
- difficult skills require designated _skill sessions_ and _consistent practice_

Skill sessions are composed of removing _mobility_ constraints, practicing
_partial movements_ and just plain old _drilling_. They should be light enough
not to interfere with the rest of training sessions.

Focus on one to three skills at a time, practicing each one _at least twice a
week_. You can practice as much as you want, the more the better! Refine skills
as necessary. Skill sessions are best done:

- before _engine sessions_
- after _base sessions_
- on rest days or outside of training sessions

## Examples

_TODO_ specific example for "grandma" training and "optimal" training

# Conclusion

_TODO_ sum it the fuck up

[^1]:
    [Three Dimensional Definition of Fitness and Health](https://www.youtube.com/watch?v=Rl6ANK8CN5w)

[^2]:
    [Context Specificity in Performance](https://journals.sagepub.com/doi/abs/10.1177/154193129804201006?journalCode=proe)

[^3]:
    [Defining CrossFit](http://journal.crossfit.com/2010/12/glassmandefining.tpl)

[^4]:
    [Age-associated power decline from running, jumping and throwing](https://pubmed.ncbi.nlm.nih.gov/25724012/)

[^5]:
    [Strength and muscle mass loss with aging process](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3940510/)

[^6]:
    [Age-related alterations in muscular endurance](https://pubmed.ncbi.nlm.nih.gov/9587183/)

[^7]:
    [Anti-aging therapy through fitness enhancement](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2695180/)

[^8]:
    [Resistance training is medicine](https://pubmed.ncbi.nlm.nih.gov/22777332/)

[^9]:
    [Resistance training for health and performance](https://pubmed.ncbi.nlm.nih.gov/12831709/)

[^10]:
    [Health benefits of aerobic exercise](https://pubmed.ncbi.nlm.nih.gov/2062750/)

[^11]:
    [Aerobic vs anaerobic exercise training effects on the cardiovascular system](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5329739/)

[^12]:
    [High-speed power training in older adults](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3902133/)

[^13]:
    [Relationship between perceived exertion during exercise and subsequent recovery](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5377553/)

[^14]:
    [Increases in RPE Rating Predict Fatigue Accumulation](https://www.frontiersin.org/articles/10.3389/fphys.2021.735565/full)

[^15]:
    [Physical activity and feelings of energy and fatigue](https://pubmed.ncbi.nlm.nih.gov/16937952/)

[^16]:
    [Regulation and Dysregulation of Cellular Energy Supply and Metabolism](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7700424/)

[^17]:
    [Mitochondria-Fundamental to Life and Health](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4684129/)

[^18]:
    [Exercise and mitochondrial health](https://physoc.onlinelibrary.wiley.com/doi/10.1113/JP278853)

[^19]:
    [Accelerometer measured physical activity and the incidence of cardiovascular disease](https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1003487#)

[^20]:
    [Foundations of CrossFit](http://journal.crossfit.com/2002/04/foundations.tpl)

[^21]:
    [The Case for Retiring Flexibility as a Major Component of Physical Fitness](https://pubmed.ncbi.nlm.nih.gov/31845202/)

[^22]:
    [Training vs. Exercise](https://startingstrength.com/article/training_vs_exercise)

[^23]:
    [Principle of Phase Potentiation](https://www.jtsstrength.com/principle-of-phase-potentiation/)

[^24]:
    [The Principle of Overload](https://www.jtsstrength.com/smart-training-is-hard-training-the-principle-of-overload/)

[^25]:
    [Maximal Strength Programming for CrossFit](https://www.jtsstrength.com/jts-classic-maximal-strength-programming-for-crossfit/)

[^26]:
    [HIIT Leads to Greater Improvements in Acute Heart Rate Recovery and Anaerobic Power as HVLIT in Advanced Athletes](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5539186/)
