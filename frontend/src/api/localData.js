// src/api/localData.js
// Berisi data tiruan/lokal untuk Plan B

export const educationHistory = [
    { id: 1, period: '2022 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
    { id: 2, period: '2019 - 2022', institution: 'SMK Negeri 2 Metro', major: 'Agribisnis Ternak Unggas' }
];

export const skills = [
    { name: 'Vue.js', level: 'Mahir' },
    { name: 'JavaScript', level: 'Mahir' },
    { name: 'Tailwind CSS', level: 'Mahir' },
    { name: 'Node.js', level: 'Menengah' },
    { name: 'Express.js', level: 'Menengah' },
    { name: 'PostgreSQL', level: 'Menengah' },
];

export const projects = [
    {
        title: 'Lucien Avenue',
        image: 'project1.png',
        description: 'Platform yang menjual sepatu branded dengan fitur keranjang belanja, dibangun untuk skalabilitas dan performa tinggi.',
        tech: ['Vue.js', 'Laravel', 'PostgreSQL'],
        link: 'https://github.com/GITikhsan/LUCIEN-AVENUE-FRONTEND'
    },
    {
        title: 'Elysia Assistant',
        image: 'project2.png',
        description: 'Chatbot asisten yang terintegrasi dengan model AI secara lokal.',
        tech: ['Kotlin', 'Llama', 'ONNX'],
        link: 'https://github.com/WahyuANugroho/Elysia_Assistant'
    },

];
