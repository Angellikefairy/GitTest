const data = [];
for(let i=1;i<11;i++) {
    let status;
    let time;
    let mounth='2020-04';
    if(i%3 === 1) {
        status = '成功'
    }
    else if(i%3 === 2) {
        status = '进行中'
    }
    else status = '失败';
    if(i<10) {
        time = mounth+`-0${i}`
    }
    else {
        time = mounth+`-${i}`
    }
    data.push({
        key: `${i}`,
        name: `文件夹${i}`,
        content: `这是一段内容${i}`,
        summary: `这是一段很长的简介，这是一段很长的简介${i}`,
        time,
        status
    })
}

export default data;