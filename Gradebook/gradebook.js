function getAverage(marks) {
    const avgMarks = marks.reduce((acc, curr) => acc + curr);
    return avgMarks / marks.length;
}

function getGrade(score) {
    const stdScore = Array.isArray(score) ? getAverage(score) : score;

    if (stdScore === 100) {
        return 'A+';
    } else if (stdScore >= 90) {
        return 'A';
    } else if (stdScore >= 80) {
        return 'B';
    } else if (stdScore >= 70) {
        return 'C';
    } else if (stdScore >= 60) {
        return 'D';
    } else if (stdScore >= 0) {
        return 'F';
    }
}

function hasPassingGrade(score) {
    const stdGrade = getGrade(score);
    return stdGrade !== 'F';

}

function studentMsg(str, grade) {
    const stdScore = Array.isArray(str) ? getAverage(str) : str;
    const stdGrade = getGrade(grade);
    const passingStatus = hasPassingGrade(grade) ? 'passed' : 'failed';

    return `Class average: ${stdScore}. Your grade: ${stdGrade}. You ${passingStatus} the course.`;
}


console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));
console.log(getAverage([10, 20, 30, 40, 55, 65, 75, 83]));
console.log(getAverage([10, 20, 30, 40, 50, 60, 70, 97]));
console.log(getGrade(100));
console.log(getGrade(90));
console.log(getGrade(80));
console.log(getGrade(70));
console.log(getGrade(60));
console.log(getGrade(50));
console.log(hasPassingGrade([10, 20, 30, 40, 50, 60, 70, 97]));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));