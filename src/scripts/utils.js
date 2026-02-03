//Date utils

const locale = 'en-GB'

export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-GB')
}

export function getLatestDateField(project) {
    if (project.data.ignoreUpdateDate) {
        return true
    }

    return project.data.updateDate?.valueOf() > project.data.pubDate.valueOf() ? project.data.updateDate : project.data.pubDate;
}

export function hasUpdateDate(project) {
    return project.data.updateDate !== undefined;
}