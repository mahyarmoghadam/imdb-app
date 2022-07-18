export default function (obj: any) {
    var result = [];

    for (var p in obj)
        if (obj.hasOwnProperty(p) && obj[p]) result.push(p + "=" + obj[p]);

    return result.join("&");
}