## utils

> 匹配字符颜色
```
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
```

> 获取字符串实际长度
```
export const getStrLength = (str = '') => {
    // 一个中文字符换算成两个英文字母
    return str.replace(/[\u0391-\uFFE5]/g, 'aa').length / 2;
};
```

> 判断文件是否为pdf
```
export const ifPdf = (url = '') => {
    return url.split('?')[0].endsWith('.pdf');
};
```

> 格式化标题
```
export const formatPrintTitle = (str = '') => {
    return str.replace(/\*+/g, '某');
};
```

> 防抖
```
export const debounce = (fn, wait = 1000) => {
    let timeout = null;
    return function() {
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, arguments), wait);
    };
};
```
