const logger = require('./logger');
const Stimulus = require('./models/Stimulus');
const Orientation = require('./models/Orientation');
const Thought = require('./models/Thought');
const Emotion = require('./models/Emotion');
const Behavior = require('./models/Behavior');
const Habit = require('./models/Habit');
const Outcome = require('./models/Outcome');

logger.info('PBPM Orchestrator starting...', {
    execution_step: 'pbpm_orchestrator_initialization',
    details: 'Initializing all PBPM modules.'
});

async function runPBPM(rawInput) {
    logger.info('PBPM execution started for new input.', {
        execution_step: 'pbpm_execution_start',
        raw_input: rawInput
    });

    // Initialize modules
    const stimulusModule = new Stimulus();
    const orientationModule = new Orientation();
    const thoughtModule = new Thought();
    const emotionModule = new Emotion();
    const behaviorModule = new Behavior();
    const habitModule = new Habit();
    const outcomeModule = new Outcome();

    // Process through the stages
    const processedStimulus = stimulusModule.process(rawInput);
    const processedOrientation = orientationModule.process(processedStimulus);
    const processedThought = thoughtModule.process(processedOrientation);
    const processedEmotion = emotionModule.process(processedThought);
    const processedBehavior = behaviorModule.process(processedEmotion);
    const processedHabit = habitModule.process(processedBehavior);
    const finalOutcome = outcomeModule.process(processedHabit);

    logger.info('PBPM execution finished.', {
        execution_step: 'pbpm_execution_complete',
        final_outcome: finalOutcome
    });

    return finalOutcome;
}

// Example Usage
const exampleInput = {
    type: 'email',
    content: 'This is an urgent message about a new opportunity!',
    sender: 'unknown'
};

runPBPM(exampleInput);
