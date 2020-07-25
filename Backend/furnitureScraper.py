from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.headless = True
driver = webdriver.Chrome('/Users/siddh1/Documents/SummerHacks/chromedriver', chrome_options=options)
furnitureNames = []
links = []
for i in range (1, 15):
    url = "https://www.dimensions.com/browse/furniture?6c3303e6_page="+ str(i)
    driver.get(url)
    names = driver.find_elements_by_class_name("text-element-title-grid")
    for x in names:
        furnitureNames.append(x.get_attribute('text'))
        links.append(x.get_attribute('href'))
        print(i)

furnitureNames = list(dict.fromkeys(furnitureNames))
links = list(dict.fromkeys(links))

