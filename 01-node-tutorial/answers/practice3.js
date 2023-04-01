const { writeFile }= require('fs').promises;

const makeFile = async () => {
  try {
    await writeFile(
      "./content/practice2.txt",
      "This is the first line.\n"
    );

    for (let i = 2; i <= 10; i++) {
      await writeFile(
        "./content/practice2.txt",
        `This is line ${i}.\n`,
        { flag: "a" }
      );
    }

    console.log("File created successfully!");
  } catch (err) {
    console.log(err);
  }
}

makeFile();







