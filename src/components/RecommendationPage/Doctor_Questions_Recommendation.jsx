const Doctor_Recommendation_Question = {
    totalQuestions: 13,
    questions: [
        {
            id: 1,
            question: "تخصص‌های شما چیست؟",
            field: "specialties",
            choices: [
                { text: "اضطراب", answer: true, id: 0 },
                { text: "افسردگی", answer: true, id: 1 },
                { text: "مشکلات خواب", answer: true, id: 2 },
                { text: "اختلالات خوردن", answer: true, id: 3 },
                { text: "مشکلات روابط", answer: true, id: 4 },
                { text: "مشکلات رفتاری", answer: true, id: 5 },
                { text: "ADHD", answer: true, id: 6 },
                { text: "اختلالات شخصیت", answer: true, id: 7 },
                { text: "اختلالات روانی شدید", answer: true, id: 8 },

            ],
        },
        {
            id: 2,
            question: "چه روش‌های درمانی را استفاده می‌کنید؟",
            field: "therapy_methods",
            choices: [
                { text: "CBT", answer: true, id: 0 },
                { text: "Mindfulness", answer: true, id: 1 },
                { text: "Family Therapy", answer: true, id: 2 },
                { text: "Psychoanalytic", answer: true, id: 3 },
                { text: "Art Therapy", answer: true, id: 4 },
                { text: "Group Therapy", answer: true, id: 5 },
            ],
        },
        {
            id: 3,
            question: "با کدام گروه‌های سنی کار می‌کنید؟",
            field: "age_groups",
            choices: [
                { text: "کودکان", answer: true, id: 0 },
                { text: "نوجوانان", answer: true, id: 1 },
                { text: "بزرگ‌سالان", answer: true, id: 2 },
                { text: "سالمندان", answer: true, id: 3 },
            ],
        },
        {
            id: 4,
            question: "چه نوع جلساتی را ارائه می‌دهید؟",
            field: "session_preference",
            choices: [
                { text: "حضوری", answer: true, id: 0 },
                { text: "مجازی", answer: true, id: 1 },
                { text: "هر دو", answer: true, id: 2 },
            ],
        },
        {
            id: 5,
            question: "آیا شما خود را مذهبی می‌دانید؟",
            field: "religion",
            choices: [
                { text: "مذهبی", answer: true, id: 0 },
                { text: "غیرمذهبی", answer: true, id: 1 },
                { text: "فرقی نمی‌کند", answer: true, id: 2 },
            ],
        },
        {
            id: 6,
            question: "جنسیت شما چیست؟",
            field: "gender",
            choices: [
                { text: "زن", answer: true, id: 0 },
                { text: "مرد", answer: true, id: 1 },
                // { text: "فرقی نمی‌کند", answer: true, id: 2 },
            ],
        },
        {
            id: 7,
            question: "چند سال سابقه کاری دارید؟",
            field: "experience_years",
            choices: [
                // { text: "زن", answer: true, id: 0 },
                // { text: "مرد", answer: true, id: 1 },
                // { text: "فرقی نمی‌کند", answer: true, id: 2 },
            ],
        },
        {
            id: 8,
            question: "حداکثر تعداد جلسات در هفته که می‌توانید ارائه دهید؟",
            field: "max_sessions_per_week",
            choices: [
                // { text: "زن", answer: true, id: 0 },
                // { text: "مرد", answer: true, id: 1 },
                // { text: "فرقی نمی‌کند", answer: true, id: 2 },
            ],
        },
        {
            id: 9,
            question: "حداکثر مدت زمان درمان که می‌توانید ارائه دهید چیست؟",
            field: "treatment_duration",
            choices: [
                { text: "کوتاه‌مدت", answer: true, id: 0 },
                // { text: "میانه‌مدت", answer: true, id: 1 },
                { text: "بلندمدت", answer: true, id: 1 },
            ],
        },
        {
            id: 10,
            question: "آیا تجربه کار با بیمارانی که مشکلات جسمی دارند را دارید؟",
            field: "physical_conditions_experience",
            choices: [
                { text: "بله", answer: true, id: 0 },
                { text: "خیر", answer: true, id: 1 },
            ],
        },
        {
            id: 11,
            question: "آیا در مدیریت بحران (مانند بیماران با خطر خودکشی) تجربه دارید؟",
            field: "crisis_management",
            choices: [
                { text: "بله", answer: true, id: 0 },
                { text: "خیر", answer: true, id: 1 },
            ],
        },
        {
            id: 12,
            question: "آیا تجربه کار با بیمارانی که داروهای خاص مصرف می‌کنند را دارید؟",
            field: "medications_experience",
            choices: [
                { text: "بله", answer: true, id: 0 },
                { text: "خیر", answer: true, id: 1 },
            ],
        },
        {
            id: 13,
            question: "آیا تمایل دارید با بیماران مذهبی یا غیرمذهبی کار کنید؟",
            field: "prefers_religious_patients",
            choices: [
                { text: "مذهبی", answer: true, id: 0 },
                { text: "غیرمذهبی", answer: true, id: 1 },
                { text: "فرقی نمی‌کند", answer: true, id: 2 },
            ],
        },
        {
            id: 14,
            question: "آیا ترجیح خاصی برای جنسیت بیمار دارید؟",
            field: "prefers_gender",
            choices: [
                { text: "زن", answer: true, id: 0 },
                { text: "مرد", answer: true, id: 1 },
                { text: "فرقی نمی‌کند", answer: true, id: 2 },
            ],
        },
        {
            id: 15,
            question: "ترجیح شما برای ارتباط با بیماران چیست؟",
            field: "communication_preference",
            choices: [
                { text: "تماس تلفنی", answer: true, id: 0 },
                { text: "ایمیل", answer: true, id: 1 },
                { text: "پیام‌رسانی", answer: true, id: 2 },
            ],
        },
        {
            id: 16,
            question: "هر توضیح دیگری که می‌خواهید اضافه کنید.",
            field: "additional_notes",
            choices: [
                // { text: "کودک", answer: true, id: 0 },
                // { text: "نوجوان", answer: true, id: 1 },
            ],
        },
    ]
}

export default Doctor_Recommendation_Question;