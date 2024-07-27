const scrapers = require("./scraper");
const fs = require("fs");

const scrapeController = async (browserInstance) => {
  const url = "https://phongtro123.com/";
  const indexs = [1, 2, 3, 4];
  try {
    let browser = await browserInstance;
    console.log("1111: ", browser);
    // Gọi hàm cạo ở file scrape
    const categories = await scrapers.scrapeCategory(browser, url);
    const selectedCategories = categories.filter((category, index) => indexs.some((i) => i === index));
    console.log("hihihi: ", selectedCategories);
    console.log("huhu: ", browser, selectedCategories[0].link);
    // let result1 = await scrapers.scraper(browser, selectedCategories[0].link);
    // fs.writeFile("chothuephongtro.json", JSON.stringify(result1), (err) => {
    //   if (err) console.log("Ghi data vô file json thất bại " + err);
    //   console.log("Thêm data thành công");
    // });

    let result2 = await scrapers.scraper(browser, selectedCategories[1].link);
    fs.writeFile("nhachothue.json", JSON.stringify(result2), (err) => {
      if (err) console.log("Ghi data vô file json thất bại " + err);
      console.log("Thêm data thành công");
    });

    let result3 = await scrapers.scraper(browser, selectedCategories[2].link);
    fs.writeFile("chothuecanho.json", JSON.stringify(result3), (err) => {
      if (err) console.log("Ghi data vô file json thất bại " + err);
      console.log("Thêm data thành công");
    });

    let result4 = await scrapers.scraper(browser, selectedCategories[3].link);
    fs.writeFile("chothuematbang.json", JSON.stringify(result4), (err) => {
      if (err) console.log("Ghi data vô file json thất bại " + err);
      console.log("Thêm data thành công");
    });
    await browser.close(">> Trình duyệt đã đóng.");
  } catch (e) {
    console.log("Lỗi ở scrape controller" + e);
  }
};

module.exports = scrapeController;
