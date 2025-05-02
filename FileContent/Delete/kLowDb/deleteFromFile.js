import fs from "fs";
import { StartFunc as StartFuncCommonExpose } from "../../../CommonExpose/returnRootDir.js";

const CommonDataPath = "Data";

const StartFunc = ({ inKey, inFileName }) => {
  const LocalReturnObject = { KTF: false, Message: "" };
  const LocalDataPath = StartFuncCommonExpose();
  const filePath = `${LocalDataPath}/${CommonDataPath}/${inFileName}.json`;

  try {
    if (!fs.existsSync(filePath)) {
      LocalReturnObject.Message = `File ${inFileName}.json does not exist at path ${filePath}`;
      return LocalReturnObject;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    if (!(inKey in data)) {
      LocalReturnObject.KReason = `${inKey} key not present to delete.`;
      return LocalReturnObject;
    }

    delete data[inKey];

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    LocalReturnObject.KTF = true;
    LocalReturnObject.JsonData= `${inKey} sucessfully deleted.`;

  } catch (err) {
    console.error("Error in deleteFromFile.js:", err);
    LocalReturnObject.Message = "Something went wrong while deleting the key.";
  }

  return LocalReturnObject;
};

export { StartFunc };
