const user = require("../models/user")
const bantuan = require("../models/bantuan")
const jenis = require("../models/jenis_bantuan")
const mitra = require("../models/mitra")
const pengajuan = require("../models/pengajuan")
const role = require("../models/role")

//all admin,far user
module.exports = {
  adduser: (req, res) => {
    try{
      user.insertMany([
        {username: "sab", email:"al@gmail.com",password:"123",
        image:"https://image.com",role:"638599e5ab5e883e9e895f07"},
        {username: "gar", email:"far@gmail.com",password:"123",
        image:"https://image.com",role:"638599c53b9f228a22f97650"},
        {username: "tesfarhan", email:"far@gmail.com",password:"123",
        image:"https://image.com",role:"63847376397f1330130be34e"}
    ])
    res.json({
      message: "user has been created"
    })
    }catch(err) {
      res.status.json({
        message : "Error when add",
        keterangan : err
      })
    }
    
  },
  getalldata: async (req,res) => {
    const Mitra =  await user.find().populate("username")
    res.json({
        message: "success get data",
        data: Mitra
      })
  },
  addjenis: (req, res) => {
    jenis.insertMany([
        { nama_jenis: "pendidikan"},
        { nama_jenis: "kesehatan"}
    ])
    res.json({
      message: "jenis has been created"
    })
  },
  addmitra: (req, res) => {
    mitra.insertMany([
        {nama_mitra: "skilvul" , image_mitra: "https:/mitra.com"},
        {nama_mitra: "NUS" ,image_mitra: "https:/mitra.com"}
    ])
    res.json({
      message: "Mitra has been created"
    })
  },
  addbantuan: (req, res) => {
    bantuan.insertMany([
        {nama_bantuan: "beasiswa s1" , description: "merupakan beasiswa s1 untuk indonesia",
        image_bantuan:"https://bantuan.com",id_mitra:"63859eecb0ed57c0edb74e88",
        id_jb:"63859f81fdd7e9934cd85c7a"},
        {nama_bantuan: "bantuan vaksin+peralatan" , description: "merupakan bantuan pasca covid",
        image_bantuan:"https://bantuan.com",id_mitra:"63859eecb0ed57c0edb74e89",
        id_jb:"63859f81fdd7e9934cd85c7b"}
        
    ])
    res.json({
      message: "bantuan has been created"
    })
  },
  addrole: (req, res) => {
    try {
      role.insertMany([
        {name:"User"},
        {name:"Admin"}
    ])
    res.json({
      message: "ROLE has been created"
    })
    }catch(err) {
      res.status.json({
        message : "Error when add",
        keterangan : err
      })
    }
    
  },

  addpengajuan: (req, res) => {
    pengajuan.insertMany([
        {dokumen: "https://dokumen.pengajuan" , id_user: "63859b928eb2292b32b646ff"
        ,id_bantuan:"6385a029ca064d92b1553b9e",status:"Menunggu diseleksi"},
        {dokumen: "https://dokumen.pengajuan" , id_user: "63859b928eb2292b32b646ff"
        ,id_bantuan:"6385a029ca064d92b1553b9d",status:"Diseleksi"}
    ])
    res.json({
      message: "pengajuan has been created"
    })
  },

}