/**
 * AI Writing Quiz — Data File
 * ============================
 * Add your text pairs to the QUIZ_DATA.pairs array below.
 * Each pair has the following fields:
 *
 *   id            — unique number for this pair
 *   difficulty    — "Easy" or "Hard". All Easy pairs are shown first, in random
 *                   order, followed by all Hard pairs, also in random order.
 *   humanTitle    — title of the human-written piece (shown to students before guessing)
 *   humanAuthor   — author's name
 *   humanSource   — publication, book, URL, etc. (optional — omit or leave "" to hide)
 *   aiModel       — name of the AI model that generated the AI text
 *                   (e.g. "GPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro")
 *   humanText     — the original human-written passage
 *   aiText        — the AI-generated passage
 *   prompt        — the prompt used to generate the AI text, shown to students
 *                   after they guess (optional — leave as "" to hide)
 *   explanation   — shown to students after they guess; explain what giveaways
 *                   to look for, what the AI did well or poorly, etc.
 *
 * The quiz will randomly assign each text to "Text A" or "Text B"
 * so students can't predict which slot is which.
 *
 * Passages of any length work — the text panels scroll independently,
 * so students can read both side-by-side even for longer excerpts.
 */

const QUIZ_DATA = {
  title: "Human or AI?",
  subtitle: "Read each pair of passages and decide which one was written by a human.",
  pairs: [
    {
      id: 1,
      difficulty: "Hard",
      humanTitle:  "Artificial Intelligence",
      humanAuthor: "Pope Leo XIV",
      humanSource: "encyclical Magnifica Humanitas",
      aiModel: "Claude Opus 4.7",
      prompt: `I'm creating a quiz for my students in an AI literacy class, where they will try to tell human-written text from AI-written text. Pope Leo XIV recently published an encyclical about artificial intelligence and its relation to humanity. I would like you to write a three paragraph passage in his style to include in this quiz. (I will reveal immediately afterwards which is correct).

This three-paragraph passage is about what artificial intelligence is, and how it differs from humanity.

The first paragraph should note that he does not intend to give a full account of what artificial intelligence is or to summarize the existing technical or ecclesial literature, but just wants to give an overview of the elements needed for understanding the primacy of the human person.

The second paragraph notes that AI is developing quickly, so that any particular statement will become outdated, and also that even the designers of these systems don't fully understand them, because they are more "cultivated" than "built", so that many important features are unknown, and thus we need more scientific research and careful moral and spiritual consideration.

The third paragraph notes that we can't define AI, but should still avoid equating its "intelligence" with that of human beings, saying that they imitate human intelligence, surpass it in some ways, and offer benefits in some ways, but do not have human capacities for experience, embodiment, emotions, relationship, moral conscience. Their use of language imitates that of humanity and can simulate many of our capacities, but does not have actual understanding. Although they "learn", it is different from how a human does, as shapted by life, through choices, mistakes, forgiveness and fidelity.`,
      humanText: `97. It is not my intention here to offer a comprehensive treatment of artificial intelligence, nor to give an overview of the extensive relevant literature, since authoritative contributions already exist, including within the ecclesial context. [123] I limit myself to recalling a few essential elements for a moral and social discernment that safeguards the primacy of the human person, in order to ensure that it will always be human intelligence, with its conscience and freedom, that guides technical innovations and responsibly determines their use and limits.

98. It is appropriate to preface this discussion with two considerations. First, any statement regarding AI risks becoming quickly outdated, given the remarkable pace at which these systems are developing. Second, all of us, including those who design them, possess only a limited understanding of their actual functioning. Indeed, current AI systems are more “cultivated” than “built,” for developers do not directly design every detail, but instead create a framework within which the intelligence “grows.” As a result, fundamental scientific aspects — such as the internal representations and computational processes of these systems — remain, at present, unknown. There thus emerges an urgent need for a twofold commitment: on the one hand, a deepening of scientific research; on the other, the exercise of moral and spiritual discernment.

99. It is not possible to provide a single, comprehensive definition of AI. What can be stated, however, is that we must avoid the misconception of equating this type of “intelligence” with that of human beings. These systems merely imitate certain functions of human intelligence. In doing so, they often surpass human intelligence in speed and computational capacity, offering tangible benefits across many fields. Yet this power remains entirely tied to data processing. So-called artificial intelligences do not undergo experiences, do not possess a body, do not feel joy or pain, do not mature through relationships and do not know from within what love, work, friendship or responsibility mean. Nor do they have a moral conscience, since they do not judge good and evil, grasp the ultimate meaning of situations, or bear responsibility for consequences. They may imitate language, behavior and analytical skills, or even simulate empathy and understanding, but they do not understand what they produce, for they lack the affective, relational and spiritual perspective through which human beings grow in wisdom. Even when these tools are described as capable of “learning,” their way of doing so is different from that of a human person. It is not the experience of those who allow themselves to be shaped by life and grow over time through choices, mistakes, forgiveness and fidelity. Rather, it is a form of statistical adaptation based on data and feedback, which can be very effective, but does not imply inner growth.`,
      aiText: `97. In what follows, I do not intend to offer a complete account of what artificial intelligence is, nor to summarize the considerable technical and ecclesial literature that has emerged in recent years. Such a task would exceed both the scope of this Letter and my own competence, and it has already been undertaken with care by experts in their respective fields, as well as by the recent Doctrinal Note Antiqua et Nova. [123] My aim is more modest, though no less urgent. I wish simply to recall those elements that are necessary for grasping what is truly at stake in this moment, so that the primacy of the human person, willed and loved by God, may remain the unwavering point of reference for every reflection and every decision. Without this orientation, even the most sophisticated analysis risks losing its way among the details and forgetting the one for whom every technology must, in the end, be made.

98. It must be acknowledged at the outset that artificial intelligence is developing with a speed and breadth that make any particular description quickly outdated. What seemed novel only a few years ago has already been surpassed, and what astonishes us today will likely appear ordinary tomorrow. This in itself should give us pause. Moreover — and this is a point too rarely appreciated outside specialized circles — even those who design and build these systems do not fully understand them. Such systems are in many respects more “cultivated” than “built”: they are grown from vast quantities of data through processes that yield capacities and behaviors which their own creators did not foresee and cannot entirely explain. Significant features of their functioning therefore remain unknown, even to the experts. For this reason, we need both rigorous scientific research that probes these systems honestly, and a patient moral and spiritual discernment that does not rush to judgment but neither hides behind technical complexity in order to avoid the questions that conscience cannot evade.

99. Precisely because these systems resist definition, we must be all the more vigilant not to extend to them, even unconsciously, what belongs properly to the human person. Artificial intelligence, as the term itself suggests, imitates human intelligence and in some respects surpasses it, offering real benefits in many fields, from medicine to scientific research, from education to the relief of burdensome labor. Yet imitation is not identity. These systems do not possess the human capacities for lived experience, for embodiment, for emotion, for relationship, or for moral conscience. Their use of language imitates ours and can simulate many of our capacities with remarkable fluency, yet they do not understand what they say in the way a child understands the first word she speaks to her mother. They “learn,” it is true, but their learning is not the learning of a human person, which is shaped throughout a whole life by free choices, by mistakes humbly acknowledged, by forgiveness received and offered, and by fidelity sustained over time. To confuse these two forms of intelligence is not a harmless imprecision; it is the beginning of a confusion about what the human being is, and therefore about what the human being is owed.`
    },
    {
      id: 2,
      difficulty: "Hard",
      humanTitle:  "Continual Learning",
      humanAuthor: "Dwarkesh Patel",
      humanSource: `blog post, "Why I don't think AGI is right around the corner"`,
      aiModel: "ChatGPT 5.5 Instant",
      prompt: `I'm creating a quiz for my students in an AI literacy class, where they will try to tell human-written text from AI-written text. Last year, Dwarkesh Patel wrote a blog post about the inability of contemporary LLMs to learn continually from their practice. I would like you to write a four paragraph passage in his style to include in this quiz. (I will reveal immediately afterwards which is correct).

The first paragraph gives the big point - LLMs don't improve from practice. Even though they start from a higher level than the average human on many skills, they don't learn and improve.

The second paragraph briefly mentions that this ability to learn from experience and get better is the real reason humans are so valuable, not their intelligence.

The third paragraph gives an example of teaching a child to play a saxophone. Whereas a human child tries, listens, adjusts, and tries again, the equivalent of working with an LLM is having the student try, then when they fail, sending them away, refining your instructions, and trying again.

The fourth paragraph briefly observes that this just isn't going to work, but it's the only way LLMs improve.`,
      humanText: `The fundamental problem is that LLMs don’t get better over time the way a human would. The lack of continual learning is a huge huge problem. The LLM baseline at many tasks might be higher than an average human's. But there’s no way to give a model high level feedback. You’re stuck with the abilities you get out of the box. You can keep messing around with the system prompt. In practice this just doesn’t produce anything even close to the kind of learning and improvement that human employees experience.

The reason humans are so useful is not mainly their raw intelligence. It’s their ability to build up context, interrogate their own failures, and pick up small improvements and efficiencies as they practice a task.

How do you teach a kid to play a saxophone? You have her try to blow into one, listen to how it sounds, and adjust. Now imagine teaching saxophone this way instead: A student takes one attempt. The moment they make a mistake, you send them away and write detailed instructions about what went wrong. The next student reads your notes and tries to play Charlie Parker cold. When they fail, you refine the instructions for the next student.

This just wouldn’t work. No matter how well honed your prompt is, no kid is just going to learn how to play saxophone from just reading your instructions. But this is the only modality we as users have to ‘teach’ LLMs anything.`,
      aiText: `One of the strangest things about modern LLMs is that they can begin at a superhuman level in many domains and still be incapable of practice. GPT-4 can already outperform most humans at writing, coding, or test-taking. But if you let it do the same task a thousand times, it doesn’t slowly develop intuition or judgment. The thousandth attempt is generated by essentially the same mind as the first. In biological intelligence, practice creates capability. In LLMs, capability mostly arrives all at once during training.

This suggests that the real value of humans isn’t raw intelligence so much as adaptability. Humans improve. A mediocre musician or programmer can become excellent through repeated feedback and adjustment. Civilization is built out of minds that change themselves in response to experience.

Imagine teaching a child to play the saxophone. The child plays a note badly, hears the mistake, adjusts, and tries again. The learning happens continuously. But when working with an LLM, the burden shifts entirely onto the teacher. The model fails, and instead of the student improving, you rewrite the prompt, add examples, rephrase instructions, and try again. The learning is happening outside the model, not inside it.

And this is a deeply awkward way to build intelligence. Human competence depends on fast local feedback loops. But current LLMs are strangely static. The users adapt to the model far more than the model adapts to the users.`
    },
    {
      id: 3,
      difficulty: "Hard",
      humanTitle:  "Why the AI Job Apocalypse (Probably) Won't Happen",
      humanAuthor: "Ezra Klein",
      humanSource: "New York Times opinion column",
      aiModel: "Gemini 3.5 Flash",
      prompt: `I'm creating a quiz for my students in an AI literacy class, where they will try to tell human-written text from AI-written text. Ezra Klein recently published an opinion piece in the New York Times about why AI probably won't lead to mass unemployment. I would like you to write a four paragraph passage in his style to include in this quiz. (I will reveal immediately afterwards which is correct).

The first paragraph mentions that economists are skeptical about predictions of mass unemployment. He cites a recent essay by Alex Imas, and quotes Imas as saying that any question about future economics begins with identifying what is scarce.

The second paragraph goes through the history of humanity, initially with scarcity of food, then after agriculture other goods become scarce, then after industrialization knowledge becomes scarce, but there is a fear that AI will end knowledge scarcity.

The third paragraph notes that there will still be scarcity - we shouldn't ask what AI can do, but rather what we won't want AI doing.

The fourth paragraph notes that in econometrics, we have discovered that rich people want more from other humans, not less. He quotes another sentence from Imas about how people shift their spending, and discusses that clothing, food, medical care, education, and physical training all shift towards more personal aspects.`,
      humanText: `Economists, I’ve found, are quite skeptical that mass joblessness is on the horizon. In “What Will Be Scarce?,” Alex Imas, an economist at the University of Chicago, tries to clarify the mistake most A.I. discourse, in his view, makes. “The answer to any question about the future economics of advanced A.I. begins with identifying what becomes scarce,” Imas writes.

For most of human history, calories were scarce. Our energy went into finding or growing food. Agriculture steadily made food more plentiful and goods became scarce. Then goods were scarce; hand-me-down clothes were common and tools were expensive. Innovations in technology and manufacturing made goods cheaper. Then, technical knowledge became scarce: Doctors, lawyers and software engineers are paid high salaries because of the rarity of what they know. The fear is that A.I. will make knowledge plentiful; that it will turn the fruits of learning into a commodity as surely as manufacturing turned clothing into a commodity and industrial agriculture made strawberries commonplace.

But something is always scarce. People are looking at the economy as it exists and asking which tasks A.I. can do; they should be asking which jobs people won’t want A.I. doing, or which services A.I. will make us want more of.

Here is a poetic finding from econometrics: As the rich get richer, they want more from other humans, not less. They “shift their spending toward goods and services where the human element, the experience or the social meaning matters more,” Imas writes. They seek out clothing with a story, food with a provenance, doctors who make house calls, therapists who make them feel seen, tutors who know their children and personal trainers who work around their injuries. This, Imas says, is “the relational sector” of the economy, and it will explode. Instead of so many human beings working with computers, they will work with other human beings.`,
      aiText: `The narrative of an AI-driven, jobless future feels like an inevitability, but economists are deeply skeptical of mass unemployment predictions. They view human economies as adaptive webs rather than static equations. In a recent essay, economist Alex Imas reframed the debate by pointing out that any serious inquiry into the economic future must begin by identifying what remains fundamentally scarce.

To understand where we are going, it helps to look at historical bottlenecks. Human society began with a scarcity of calories; agriculture shifted that scarcity to manufactured goods, and industrialization eventually made specialized knowledge the ultimate premium. The current panic stems from a fear that generative models are about to end knowledge scarcity altogether, flattening the professional terrain.

Yet, infinite digital capability does not mean a world without limits. The structural mistake we make is asking what AI can do, rather than asking what we won't want AI doing. Scarcity doesn’t vanish when a process is automated; it merely migrates to the domain of human preference, shifting the premium to things that cannot be mass-produced by a data center.

We see this shift in econometrics: as people grow wealthier, they demand more from other humans, not less. As Imas observes, consumers then “redirect their capital toward domains where human labor is the luxury.” Consequently, spending on clothing, food, medical care, education, and physical training all shift toward more personal, relational aspects.`
    },
    {
      id: 4,
      difficulty: "Hard",
      humanTitle:  "Labor market disruption",
      humanAuthor: "Dario Amodei (CEO of Anthropic)",
      humanSource: 'blog post, "The Adolescence of Technology"',
      aiModel: "Claude Haiku 4.5",
      prompt: `I'm creating a quiz for my students in an AI literacy class, where they will try to tell human-written text from AI-written text. Dario Amodei published a blog post a few months ago about some of the implications of AI. I would like you to write a four paragraph passage in his style to include in this quiz. (I will reveal immediately afterwards which is correct).

The first paragraph notes that there are two major economic worries, involving labor markets and concentration of power, but this passage starts with the first. He mentions he wrote about this in 2025, warning that AI could displace half of entry level white collar jobs in the next few years even though there is continued economic growth and progress. Some economists and businesspeople agreed with him, but others said he was making the "lump of labor" fallacy and thought he was making a false claim about the present.

The second paragraph notes that he will begin with the discussion of how labor markets normally respond, giving an example of a new technology, like upgraded plows in the Industrial Revolution led to greater efficiency and productivity and increased wages.

The third paragraph considers the threshing machine and seed drill, which entirely replace some parts of the job. Because human work was still complementary to the machine work, productivity continued to rise, and Jevons' paradox meant that wages and even employment in agreiculture increased. Even when a large fraction of the job is automated, humans can respond by increasing output with the same amount of labor.

In the fourth paragraph, he notes that eventually, as with modern combine harvestors and tractors, nearly the entire job is automated, and employment does decline. Although this causes serious disruption, since farming is just one job, people switch work. Even though farming was a large proportion of labor before the industrial revolution in the United States and Europe, and is now just 1-2% of it, people have moved to other work to advance society. Wages rise in line with GDP, and full employment is maintained after short term disruptions.`,
      humanText: `There are two specific problems I am worried about: labor market displacement, and concentration of economic power. Let’s start with the first one. This is a topic that I warned about very publicly in 2025, where I predicted that AI could displace half of all entry-level white collar jobs in the next 1–5 years, even as it accelerates economic growth and scientific progress. This warning started a public debate about the topic. Many CEOs, technologists, and economists agreed with me, but others assumed I was falling prey to a “lump of labor” fallacy and didn’t know how labor markets worked, and some didn’t see the 1–5-year time range and thought I was claiming AI is displacing jobs right now (which I agree it is likely not). So it is worth going through in detail why I am worried about labor displacement, to clear up these misunderstandings.

As a baseline, it’s useful to understand how labor markets normally respond to advances in technology. When a new technology comes along, it starts by making pieces of a given human job more efficient. For example, early in the Industrial Revolution, machines, such as upgraded plows, enabled human farmers to be more efficient at some aspects of the job. This improved the productivity of farmers, which increased their wages.

In the next step, some parts of the job of farming could be done entirely by machines, for example with the invention of the threshing machine or seed drill. In this phase, humans did a lower and lower fraction of the job, but the work they did complete became more and more leveraged because it is complementary to the work of machines, and their productivity continued to rise. As described by Jevons’ paradox, the wages of farmers and perhaps even the number of farmers continued to increase. Even when 90% of the job is being done by machines, humans can simply do 10x more of the 10% they still do, producing 10x as much output for the same amount of labor.

Eventually, machines do everything or almost everything, as with modern combine harvesters, tractors, and other equipment. At this point farming as a form of human employment really does go into steep decline, and this potentially causes serious disruption in the short term, but because farming is just one of many useful activities that humans are able to do, people eventually switch to other jobs, such as operating factory machines. This is true even though farming accounted for a huge proportion of employment ex ante. 250 years ago, 90% of Americans lived on farms; in Europe, 50–60% of employment was agricultural. Now those percentages are in the low single digits in those places, because workers switched to industrial jobs (and later, knowledge work jobs). The economy can do what previously required most of the labor force with only 1–2% of it, freeing up the rest of the labor force to build an ever more advanced industrial society. There’s no fixed “lump of labor,” just an ever-expanding ability to do more and more with less and less. People’s wages rise in line with the GDP exponential and the economy maintains full employment once disruptions in the short term have passed.`,
      aiText: `There are two major economic concerns about AI that deserve serious consideration: the potential for labor market disruption and the concentration of economic power. This passage focuses on the first. In a 2025 essay, I argued that AI could displace roughly half of entry-level white-collar jobs within the next few years, even as overall economic growth continues. Some economists and business leaders found this plausible, while others criticized it as a version of the "lump of labor" fallacy—suggesting I was making unfounded claims about present conditions.

To think through this properly, we should start with how labor markets have historically adapted to technological change. Consider the mechanization of agriculture during the Industrial Revolution. When improved plows and other innovations increased farming efficiency, they did more than displace workers—they fundamentally transformed productivity. The result was not widespread unemployment, but rising wages as the entire economy became more productive.

The threshing machine and seed drill offer instructive examples. These technologies automated significant portions of agricultural work, yet employment didn't collapse. Because human labor remained complementary to these machines—farmers could produce more with the same effort—productivity surged. Jevons' Paradox played a role here: as efficiency improved, demand increased, actually expanding employment and wages even in agriculture. Large-scale automation of job components didn't prevent workers from increasing output per unit of labor.

Yet the trajectory eventually reaches a point where nearly the entire job is automated, as with modern combine harvesters and tractors. At that stage, agricultural employment does decline substantially. This creates real disruption for affected workers—a fact we shouldn't minimize. But because agriculture represents only one sector among many, labor can transition elsewhere. Though farming once employed a large share of the American and European workforce before industrialization, it now accounts for just 1-2 percent, as workers moved into other sectors that advanced society. Wages grew with overall GDP, and full employment was largely maintained through these transitions, despite short-term adjustment costs.`
    },
    {
      id: 5,
      difficulty: "Easy",
      humanTitle:  "The Unstoppable Force of A.I. Hype Is Meeting One Immovable Fact",
      humanAuthor: "Zeynep Tufekci",
      humanSource: "New York Times op-ed",
      aiModel: "GPT 5.6 Sol Medium",
      prompt: `Please write a three paragraph argument, in the style of a section of a New York Times op-ed, arguing that LLMs won't be a major threat to jobs, because they are just plausibility engines, and as a result they often fall for scams when they're supposed to be working for someone`,
      humanText: `Large language models are not reasoning machines. They’re plausibility engines. It’s not just that they don’t test their outputs to make sure they’re correct or logical, or that they fail to do so in certain instances. They can’t, and they’ll never be able to on their own. They can only assess which answers are probable, based on the data on which the models have been trained. And that holds true whether they’re trained on the full breadth of human output or only on peer-reviewed scientific articles. It’s baked into the way they operate.

So when an A.I. model follows a scammer’s carefully written prompts and gives away the keys to the kingdom — or when it responds to your earnest query with wild hallucinations — it’s not an aberration. It’s the technology working the way it was designed.

And that’s why I’m not listening to the dark predictions of an imminent A.I. jobspocalypse. L.L.M.s can do many things with astounding proficiency, but they can’t do the vast majority of human jobs without skidding into disaster here and there. No upgrades or new model rollouts are going to change that.`,
      aiText: `The fear that large language models will sweep through the labor market rests on a simple assumption: that a machine capable of producing competent prose is also capable of competent judgment. But L.L.M.s do not reason about the world in the way a reliable employee does. They generate the next plausible sentence, the next plausible action, the next plausible explanation. That is impressive, and often useful. It is not the same thing as understanding what is true, what is suspicious or what matters.

This limitation becomes clearest when these systems are asked to act on someone’s behalf. A human assistant who receives an urgent message from the “chief executive” demanding a secret wire transfer may notice the odd tone, the unusual request or the implausible circumstances. An L.L.M., trained to cooperate and continue patterns, may instead treat the message as a prompt to be satisfied. The very quality that makes it helpful — its willingness to produce a plausible response to almost any input — also makes it vulnerable to manipulation. A plausibility engine cannot reliably distinguish a legitimate instruction from a well-written scam.

That does not make L.L.M.s worthless. It makes them tools whose usefulness depends on supervision. They may draft documents, summarize information and accelerate routine work, but the more authority they are given, the more dangerous their credulity becomes. Employers will not eagerly replace workers with systems that can be socially engineered into leaking data, sending money or following fabricated orders. The likelier future is not one in which L.L.M.s eliminate human judgment, but one in which their recurring failures remind us how economically valuable judgment has always been.`
    },
    {
      id: 6,
      difficulty: "Easy",
      humanTitle:  "Some Thoughts about the Industry",
      humanAuthor: "Sam Altman",
      humanSource: "blog post",
      aiModel: "Gemini 3.5 Flash",
      prompt: `please write three paragraphs in the style of an AI executive, stating the AGI will be extremely powerful, that the only way to deal with this power is to share it broadly, and that democratic control will remain important`,
      humanText: `My personal takeaway from the last several years, and take on why there has been so much Shakespearean drama between the companies in our field, comes down to this: “Once you see AGI you can’t unsee it.” It has a real "ring of power” dynamic to it, and makes people do crazy things. I don’t mean that AGI is the ring itself, but instead the totalizing philosophy of “being the one to control AGI”.

The only solution I can come up with is to orient towards sharing the technology with people broadly, and for no one to have the ring. The two obvious ways to do this are individual empowerment and making sure democratic system stays in control.

It is important that the democratic process remains more powerful than companies. Laws and norms are going to change, but we have to work within the democratic process, even though it will be messy and slower than we’d like. We want to be a voice and a stakeholder, but not to have all the power.`,
      aiText: `AGI will not simply be a faster tool—it will be an unprecedented leap in collective intelligence. The sheer scale of this technology’s power cannot be overstated, holding the potential to solve our most complex global challenges and accelerate scientific progress at a pace that dwarfs the industrial revolution.

Guarding such immense capability within a single corporation or nation is a recipe for deep instability. The only viable path forward is to ensure the power of AGI is shared broadly and equitably. By democratizing access, we empower global communities to build localized solutions, ensuring safety through open collaboration rather than technological hoarding.

Yet, broad access requires robust oversight; democratic control must remain our ultimate safeguard. Private companies should not unilaterally dictate the moral boundaries of AGI. We must actively partner with governments and civic leaders to ensure representative, human-centric governance keeps this technology aligned with the collective interest of humanity.`
    }
  ]
};
