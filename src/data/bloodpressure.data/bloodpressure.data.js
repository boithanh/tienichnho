export const bpThresholds = {
    user: {
        "24h": {
            systolic: [
                { label: 'veryLow', max: 69 },
                { label: 'low', min: 69, max: 90 },
                { label: 'normal', min: 90, max: 115 },
                { label: 'high', min: 115, max: 130 },
                { label: 'veryHigh', min: 130 },
            ],
            diastolic: [
                { label: 'veryLow', max: 41 },
                { label: 'low', min: 41, max: 60 },
                { label: 'normal', min: 60, max: 65 },
                { label: 'high', min: 65, max: 80 },
                { label: 'veryHigh', min: 80 },
            ],
            difference: [
                { label: 'veryLow', max: 25 },
                { label: 'low', min: 25, max: 31 },
                { label: 'normal', min: 30, max: 51 },
                { label: 'high', min: 50, max: 61 },
                { label: 'veryHigh', min: 61 },
            ],
            heartRate: [
                { label: 'low', max: 61 },
                { label: 'normal', min: 61, max: 100 },
                { label: 'high', min: 100 },
            ]
        },
        day: {
            systolic: [
                { label: 'veryLow', max: 74 },
                { label: 'low', min: 74, max: 95 },
                { label: 'normal', min: 95, max: 120 },
                { label: 'high', min: 120, max: 135 },
                { label: 'veryHigh', min: 135 },
            ],
            diastolic: [
                { label: 'veryLow', max: 46 },
                { label: 'low', min: 46, max: 65 },
                { label: 'normal', min: 65, max: 60 },
                { label: 'high', min: 60, max: 85 },
                { label: 'veryHigh', min: 85 },
            ],
            difference: [
                { label: 'veryLow', max: 25 },
                { label: 'low', min: 25, max: 31 },
                { label: 'normal', min: 30, max: 51 },
                { label: 'high', min: 50, max: 61 },
                { label: 'veryHigh', min: 61 },
            ],
            heartRate: [
                { label: 'low', max: 61 },
                { label: 'normal', min: 61, max: 100 },
                { label: 'high', min: 100 },
            ]
        },
        night: {
            systolic: [
                { label: 'veryLow', max: 59 },
                { label: 'low', min: 59, max: 85 },
                { label: 'normal', min: 85, max: 110 },
                { label: 'high', min: 110, max: 120 },
                { label: 'veryHigh', min: 120 },
            ],
            diastolic: [
                { label: 'veryLow', max: 31 },
                { label: 'low', min: 31, max: 55 },
                { label: 'normal', min: 55, max: 65 },
                { label: 'high', min: 65, max: 70 },
                { label: 'veryHigh', min: 70 },
            ],
            difference: [
                { label: 'veryLow', max: 25 },
                { label: 'low', min: 25, max: 31 },
                { label: 'normal', min: 30, max: 51 },
                { label: 'high', min: 50, max: 61 },
                { label: 'veryHigh', min: 61 },
            ],
            heartRate: [
                { label: 'low', max: 61 },
                { label: 'normal', min: 61, max: 100 },
                { label: 'high', min: 100 },
            ]
        },
    },
    bacSi: { /* ... */ },
};
