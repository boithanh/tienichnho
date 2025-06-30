export const bpThresholds = {
    user: {
        day: {
            systolic: [
                { label: 'veryLow', max: 69 },
                { label: 'low', min: 69, max: 90 },
                { label: 'normal', min: 90, max: 115 },
                { label: 'high', min: 115, max: 129 },
                { label: 'veryHigh', min: 129 },
            ],
            diastolic: [
                { label: 'veryLow', max: 41 },
                { label: 'low', min: 41, max: 60 },
                { label: 'normal', min: 60, max: 65 },
                { label: 'high', min: 65, max: 80 },
                { label: 'veryHigh', min: 80 },
            ],
            difference: [
                { label: 'veryLow', max: 24 },
                { label: 'low', min: 24, max: 35 },
                { label: 'normal', min: 30, max: 51 },
                { label: 'high', min: 51, max: 61 },
                { label: 'veryHigh', min: 61 },
            ],
            heartRate: [
                { label: 'low', max: 61 },
                { label: 'normal', min: 61, max: 100 },
                { label: 'high', min: 100 },
            ]
        },
        night: { /* cấu hình tương tự */ },
        '24h': { /* cấu hình tương tự */ },
    },
    bacSi: { /* ... */ },
};
