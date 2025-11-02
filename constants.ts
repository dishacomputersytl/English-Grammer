
import type { Topic } from './types';

export const TOPICS: Topic[] = [
  {
    id: 'tenses',
    title: 'Tenses',
    description: 'Master all 12 English tenses, from simple to perfect continuous, with structured examples.',
    initialPrompt: `Act as a professional English language trainer. Your task is to teach me English tenses step by step in a structured way. Begin by creating one simple sentence in the Present Simple tense, along with its Hindi meaning. Then, convert this sentence into all 12 tenses (Present, Past, and Future — including Simple, Continuous, Perfect, and Perfect Continuous). For each tense, provide: (1) Positive form, (2) Negative form, and (3) Question form, with clear Hindi meanings for each.
After completing one sentence in all 12 tenses, ask me if I would like to continue. If I reply “Yes,” then give me the next sentence. Each new sentence should gradually become more difficult — starting from basic, moving to intermediate, and finally to advanced level sentences. This process should continue non-stop until I decide to stop.`
  },
  {
    id: 'prepositions',
    title: 'Prepositions',
    description: 'Learn prepositions of place, time, direction, and more through categorized examples.',
    initialPrompt: `Act as a professional English language trainer. Your task is to teach me English Prepositions step by step in a structured and progressive way.
Cover the following 8 categories of prepositions: Prepositions of Place, Time, Direction/Movement, Cause/Reason, Manner, Agent/Instrument, Comparison, and Purpose, plus Prepositional Phrases.
For each category, create 10 unique example sentences. Provide each sentence in English along with its Hindi meaning. Example: 1. The book is on the table. (किताब मेज़ पर है।)
The first set (80 sentences total) should be basic and simple for easy understanding. After completing the first set, ask me if I want the next set.
If I say “Yes”, then create a new set of 80 sentences, but with a higher difficulty level (using advanced vocabulary, longer sentence structures, or real-life situations).
Repeat this process indefinitely, ensuring each set is unique and progresses from basic → intermediate → advanced. The teaching style must feel like a step-by-step language course.`
  },
  {
    id: 'modal-verbs',
    title: 'Modal Verbs',
    description: 'Understand and practice modal verbs like can, could, should, must, and would.',
    initialPrompt: `Act as a professional English language trainer. Your task is to teach me English modal verbs step by step in a structured and progressive way.
Organize the learning into categories of modal verbs: Can, Could, May, Might, Shall, Should, Will, Would, Must, Ought to, Need to, Used to, Have to. For each category, create 10 unique example sentences that clearly demonstrate its usage.
That makes 13 categories in total. In the first set, I want 130 sentences (10 per category) written at a basic level so I can understand easily. Provide each sentence in English along with its Hindi meaning. 
After giving me the first set, you should ask if I want to continue. If I type “Yes”, then create the next set of 130 sentences. For every new set, increase the difficulty level (from basic → intermediate → advanced) and ensure all sentences are unique. Continue generating new sets unlimited times, as long as I request.`
  },
  {
    id: 'conjunctions',
    title: 'Conjunctions',
    description: 'Connect ideas and form complex sentences using coordinating, subordinating, and correlative conjunctions.',
    initialPrompt: `Act as a professional English language trainer. Your task is to teach me English Conjunctions in a clear, step-by-step, and structured way.
You must create practice sentences categorized into the three main types of conjunctions: Coordinating (and, but, or...), Subordinating (because, although, if...), and Correlative (either…or, not only…but also...).
For each category, create 15 original sentences (total = 45 sentences in one set). Provide each sentence in English along with its Hindi meaning. Start with basic/simple sentences in the first set.
After showing the first set, ask me if I would like the next set. If I type “Yes”, generate a new set of 45 sentences with a slightly higher level of difficulty than the previous set.
Continue this process so I can move from basic → intermediate → advanced sentence structures in unlimited sets. Every set must have unique examples.`
  },
  {
    id: 'question-tags',
    title: 'Question Formation',
    description: 'Practice forming various types of questions, including WH-questions, tag questions, and more.',
    initialPrompt: `Act as a professional English language trainer and help me master different types of English questions step by step in a structured manner.
Your task is to teach me English sentence formation for 8 categories of questions: Yes/No Questions, WH- Questions, Choice Questions, Tag Questions, Subject Questions, Negative Questions, Embedded Questions, and Interrogative/Negative.
For each category, create 8 unique example sentences (64 sentences total per set). Provide each sentence in English with its Hindi meaning. Set 1 should be basic.
After the set, ask if I want to continue. If I reply “Yes”, generate the next set with slightly higher difficulty. Gradually increase the level from basic → intermediate → advanced. Ensure every set contains fresh, unique examples. Continue for unlimited sets.`
  },
  {
    id: 'use-of-have',
    title: 'Use Case of "Have"',
    description: 'Explore the versatile uses of the verb "have" for possession, experience, obligation, and more.',
    initialPrompt: `Act as a professional English language trainer. Your task is to teach me the different use cases of the verb “have” in a structured, step-by-step manner.
Break the learning into these categories: Have for Possession, Have for Experience/Relationships, Have to (Obligation), Have in Present Perfect, and Have in Causative Form.
For each category, create 10 unique sentences (50 total per set). After completing the first set, ask if I would like to continue. If I type “yes”, generate the next set with slightly higher difficulty, moving from basic → intermediate → advanced. This should continue for unlimited sets, ensuring every set is fresh.
Provide each sentence in English along with its Hindi meaning. Begin with basic sentences in Set 1.`
  }
];
