//Date utils

export function formatDateFull(date) {
    return new Date(date).toLocaleDateString('en-GB');
}

export function formatDateYear(date) {
    return new Date(date).getFullYear().toString();
}

export function getLatestDateField(project) {
    if (project.data.ignoreUpdateDate) {
        return project.data.pubDate.valueOf();
    }

    return project.data.updateDate?.valueOf() > project.data.pubDate.valueOf() ? project.data.updateDate : project.data.pubDate;
}

export function hasUpdateDate(project) {
    return project.data.updateDate !== undefined;
}