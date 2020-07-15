const keywordscolorful = (str = '', keys = [], markStyle) => {
    let newStr = str;
    keys.forEach(key => {
        newStr = newStr.replace(
            new RegExp(`(${key})`, 'g'),
            `<font style='${markStyle}'>$1</font>`
        );
    });
    return newStr;
};

export const MapCodeToHtml = async ({codes = [], markStyle = `color:#ffc847`}) => {
    let res = await $ax({
        type: 'get',
        url: '/api/misc/getPreLoanRiskPoints'
    });

    let CodeMapArr = [];
    if (res.data.code === 2000) {
        CodeMapArr = res.data.data.preRiskPoints;
    } else {
        return CodeMapArr;
    }

    let arr = CodeMapArr.filter(item => codes.includes(item.id));

    return arr.map(item => {
        return keywordscolorful(item.riskDesc, item.keyWord, markStyle);
    });
};

// 获取字符串实际长度
export const getStrLength = (str = '') => {
    // 一个中文字符换算成两个英文字母
    return str.replace(/[\u0391-\uFFE5]/g, 'aa').length / 2;
};

// 判断文件是否为pdf
export const ifPdf = (url = '') => {
    return url.split('?')[0].endsWith('.pdf');
};

export const formatPrintTitle = (str = '') => {
    return str.replace(/\*+/g, '某');
};

// 测试环境水印映射
export const mapMarkToWaterMask = () => {
    const map = {
        gray: '【灰度测试】',
        testing: '【172测试】',
        testing2: '【118测试】'
    };
    return map[window.env] || '';
};

// 防抖
export const debounce = (fn, wait = 1000) => {
    let timeout = null;
    return function() {
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, arguments), wait);
    };
};

// 缺省字段
export const showEllipsis = (str, placehplder = '--') => {
    return str || placehplder;
};
