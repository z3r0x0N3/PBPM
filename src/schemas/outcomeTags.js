const outcomeTags = {
    'psy:OUT-CONV': 'Conversion achieved (sale, sign-up, agreement, click-through).',
    'psy:OUT-REJ': 'Active rejection or disengagement (opt-out, unsubscribe, no-response).',
    'psy:OUT-OPEN': 'Stimulus acknowledged but no further action taken (email opened, SMS read).',
    'psy:OUT-IGN': 'Stimulus ignored completely; no interaction detected.',
    'psy:OUT-DELAY': 'Response deferred; time lag exceeds standard threshold for engagement.',
    'psy:OUT-LOOP': 'Behavior repeated again in similar context; feedback loop confirmed.',
    'psy:OUT-ESC': 'Stimulus triggers avoidance or suppression behavior (closed app, bounced).',
    'psy:OUT-QUAL': 'Subject qualified for next-stage logic (lead score threshold met).',
    'psy:OUT-DISQ': 'Subject disqualified or filtered out by logic rules or user actions.',
    'psy:OUT-UPDT': 'User model updated based on interaction pattern or new archetype evidence.',
    'psy:OUT-NTRL': 'Neutral outcome; insufficient data for meaningful resolution.',
    'psy:OUT-FALL': 'Drop-off in engagement or attention over time detected.',
    'psy:OUT-UPTR': 'Uptrend in interaction frequency, quality, or response latency.',
    'psy:OUT-TRUST': 'Inferred increase in trust, compliance, or rapport.',
    'psy:OUT-REGRT': 'Inferred regret or negative emotional aftermath from user action.',
    'psy:OUT-SAT': 'Inferred satisfaction or fulfillment post-decision or action.',
    'psy:OUT-NEGFB': 'Feedback or inferred emotional state reflects dissatisfaction.',
    'psy:OUT-LOOPC': 'Habitual completion of predicted path without friction; model reinforcement.',
    'psy:OUT-BRK': 'Break in pattern—abnormal behavior from predictive baseline.',
    'psy:OUT-DORM': 'Subject moved to dormant state due to prolonged inactivity.'
};

module.exports = outcomeTags;
