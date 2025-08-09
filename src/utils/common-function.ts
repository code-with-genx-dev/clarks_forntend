export function getShortName(name: string): string {
    if (!name) return '';

    const words = name.trim().split(/\s+/);

    if (words.length === 1) {
        // Single word: take first 2 letters
        return words[0].substring(0, 2).toUpperCase();
    }

    // Multiple words: take first letter of first 2 words
    return (
        words[0][0].toUpperCase() +
        words[1][0].toUpperCase()
    );
}

const tailwindDimColors = [
    'bg-red-200',
    'bg-yellow-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-indigo-200',
    'bg-purple-200',
    'bg-pink-200',
    'bg-gray-300',
    'bg-slate-300',
    'bg-zinc-300',
    'bg-neutral-300',
    'bg-stone-300',
    'bg-teal-300',
    'bg-emerald-300',
    'bg-cyan-300',
    'bg-sky-300',
    'bg-lime-300',
    'bg-amber-300',
];

export function getRandomTailwindBgColor(): string {
    const index = Math.floor(Math.random() * tailwindDimColors.length);
    return tailwindDimColors[index];
}

export function extractFileFromBase64(base64String: string) {
        // 1️⃣ Split header and data
        const [meta, base64Data] = base64String?.split(',');

        // 2️⃣ Extract mime type (eg: image/png or application/pdf)
        const mimeMatch = meta?.match(/data:(.*);base64/);
        const mimeType = mimeMatch ? mimeMatch[1] : '';

        // 3️⃣ Get file extension
        let extension = '';
        if (mimeType) {
            const extMap: Record<string, string> = {
                'image/jpeg': 'jpg',
                'image/png': 'png',
                'application/pdf': 'pdf',
            };
            extension = extMap[mimeType] || mimeType.split('/')[1];
        }

        // 4️⃣ Create a filename
        const fileName = `file_${Date.now()}.${extension}`;

        // 5️⃣ Convert base64 to Blob
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: mimeType });

        // 6️⃣ Create preview link
        const fileUrl = URL.createObjectURL(blob);

        return { fileName, mimeType, fileUrl, blob };
    }