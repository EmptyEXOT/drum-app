export const core = (cls: string, prefix: string): string => {
    if (!cls) return '';
    let sanitized = cls.replace(/\s\s+/g, ' ');
    sanitized = sanitized.trim();
    const classes = sanitized.split(' ');
    const res = classes.map(cls => `${prefix}:` + cls);
    return res.join(' ');
}