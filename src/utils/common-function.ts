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