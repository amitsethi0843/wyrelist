import requests,urllib

def getData(url,data):
    urlParam=urllib.urlencode(data) if data else ""
    print(url+urlParam)
    resp=requests.get(url+urlParam if urlParam else '')
    jsn=resp.json()
    return jsn