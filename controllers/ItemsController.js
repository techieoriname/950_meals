const Item = require("../models/Item");
const Subitem = require("../models/Subitem");
const Itemcategory = require("../models/Itemcategory");
const { check, validationResult } = require("express-validator");
const slug = require("slug-generator");

exports.cat = async (req, res) => {
  const itemcat = await Itemcategory.query().withGraphFetched("items");
  res.status(200).json({ status: "success", data: itemcat });
};

exports.createcat = async (req, res) => {
  try {
    const rechk = await Itemcategory.query().findOne("name", req.body.name);
    if (rechk) {
      res.status(422).json({
        status: "failed",
        errors: "Category name already exist",
      });
    } else {
      await Itemcategory.query().insert({
        name: req.body.name,
        is_active: req.body.is_active,
      });
      res.status(200).json({
        status: "success",
        msg: "Category created successfully",
      });
    }
  } catch (e) {
    console.log(req.body.name);
  }
};

exports.createitem = async (req, res) => {
  let sampleFile;
  let uploadPath;
  try {
    const rechk = await Item.query().findOne("name", req.body.name);
    if (rechk) {
      res.status(422).json({
        status: "failed",
        errors: "Food Item already exist",
      });
    } else {
      if (!req.files || Object.keys(req.files).length === 0) {
        res.status(422).json({
          status: "failed",
          error: "Image not uploaded",
        });
      } /*else if (
        req.files.itemImage.mimetype !== "image/jpeg" ||
        "image/png" ||
        "image/gif"
      ) {
        res.status(422).json({
          status: "failed",
          error: "File format not supported",
          format: `${req.files.itemImage.mimetype}`,
        });
      }*/ else {
        sampleFile = req.files.itemImage;
        let filename = Date.now() + "_" + sampleFile.name;
        uploadPath = __dirname + "/../storage/items/" + filename;
        sampleFile.mv(uploadPath, function (err) {
          if (err) {
            res.json({
              status: "failed",
              error: "Image could not be saved",
            });
          }
        });
        await Item.query().insert({
          name: req.body.name,
          image: filename,
          is_popular: req.body.is_popular,
          is_new: req.body.is_new,
          is_active: req.body.is_active,
          is_meat: req.body.is_meat,
          is_drink: req.body.is_meat,
          itemcategory_id: req.body.cat_id,
          slug: slug(req.body.name),
        });
        res.status(200).json({
          status: "success",
          msg: "Food Item created successfully",
        });
      }
    }
  } catch (e) {
    res.json({
      status: "failed",
      error: "Item could not be created",
    });
  }
};

exports.getitems = async (req, res) => {
  try {
    const item = await Item.query().withGraphFetched("subitems");
    if (item) {
      res.status(200).json({
        status: "success",
        data: item,
      });
    } else {
      res.status(422).json({
        status: "failed",
        error: "Unable to fetch Items",
      });
    }
  } catch (e) {
    res.json({
      status: "failed",
      error: "Item could not be fetched",
    });
  }
};

exports.createsubitem = async (req, res) => {
  let sampleFile;
  let uploadPath;
  try {
    if (req.params.id) {
      const item = await Item.query().findOne({ id: req.params.id });
      if (item) {
        const rechk = await Subitem.query().findOne({
          name: req.body.name,
          item_id: req.body.item_id,
        });
        if (rechk) {
          res.status(422).json({
            status: "failed",
            errors: "Item already exist",
          });
        } else {
          if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(422).json({
              status: "failed",
              errors: "Image not uploaded",
            });
          } /* else if (
            req.files.itemImage.mimetype !== "image/jpeg" ||
            req.files.itemImage.mimetype !== "image/png" ||
            req.files.itemImage.mimetype !== "image/gif"
          ) {
            return res.status(422).json({
              status: "failed",
              errors: "File format not supported",
            });
          }*/ else {
            sampleFile = req.files.itemImage;
            let filename = Date.now() + "_" + sampleFile.name;
            uploadPath = __dirname + "/../storage/items/" + filename;
            sampleFile.mv(uploadPath, function (err) {
              if (err) {
                res.json({
                  status: "failed",
                  errors: "An error occurred while uploading file",
                });
              }
            });
            await Subitem.query().insert({
              name: req.body.name,
              image: filename,
              amount: req.body.amount,
              sale: req.body.sale,
              is_popular: req.body.is_popular,
              is_new: req.body.is_new,
              is_active: req.body.is_active,
              type: req.body.type,
              item_id: req.body.item_id,
            });

            res.status(200).json({
              status: "success",
              msg: "Food Item created successfully",
            });
          }
        }
      } else {
        res.json({
          status: "failed",
          errors: "Primary food item not found",
          query: req.params.id,
        });
      }
    } else {
      res.status(422).json({
        status: "failed",
        errors: "Primary food item can't be empty",
      });
    }
  } catch (e) {
    res.json({
      status: "failed",
      error: "Item could not be created",
    });
  }
};
