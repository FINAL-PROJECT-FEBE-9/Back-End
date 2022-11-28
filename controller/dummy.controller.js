const user = require("../models/user")
const bantuan = require("../models/bantuan")
// const jenis = require("../models/jenis_bantuan")
// const mitra = require("../models/mitra")
const pengajuan = require("../models/pengajuan")
const role = require("../models/role")


module.exports = {
  adduser: (req, res) => {
    user.insertMany([
        {username: "haf", email:"hafizh@gmail.com",password:"123",
        image:"https://image.com",status:"Admin",role:"638381059e90a1f5f3a750b5"},
        {username: "test", email:"coba@gmail.com",password:"123",
        image:"https://image.com",status:"User",role:"6383812a49f0d0c61ade7aa8"}
    ])
    res.json({
      message: "user has been created"
    })
  },
  getalldata: async (req,res) => {
    const Mitra =  await user.find().populate("username")
    res.json({
        message: "success get data",
        data: Mitra
      })
  },
  // addjenis: (req, res) => {
  //   jenis.insertMany([
  //       { nama_jenis: "pendidikan"},
  //       { nama_jenis: "kesehatan"}
  //   ])
  //   res.json({
  //     message: "jenis has been created"
  //   })
  // },
  // addmitra: (req, res) => {
  //   mitra.insertMany([
  //       {nama_mitra: "skilvul" , image_mitra: "https:/mitra.com"},
  //       {nama_mitra: "NUS" ,image_mitra: "https:/mitra.com"}
  //   ])
  //   res.json({
  //     message: "Mitra has been created"
  //   })
  // },
  addbantuan: (req, res) => {
    bantuan.insertMany([
        {nama_bantuan: "beasiswa s1" , description: "merupakan beasiswa s1 untuk indonesia",
        image_bantuan:"https://bantuan.com",id_mitra:"637ef9c269e9624decc71d5a",
        id_jb:"637ef8c674a59cf7a7978ea7"},
        {nama_bantuan: "bantuan vaksin+peralatan" , description: "merupakan bantuan pasca covid",
        image_bantuan:"https://bantuan.com",id_mitra:"637ef9c269e9624decc71d5a",
        id_jb:"637ef8c674a59cf7a7978ea8"}
        
    ])
    res.json({
      message: "bantuan has been created"
    })
  },
  addrole: (req, res) => {
    role.insertMany([
        {name:"User"}
    ])
    res.json({
      message: "ROLE has been created"
    })
  },

  addpengajuan: (req, res) => {
    pengajuan.insertMany([
        {dokumen: "https://dokumen.pengajuan" , id_user: "637ef3bc0c72fa152431605a"
        ,id_bantuan:"637efc18ee3d0960cfe6097b",status:"Menunggu diseleksi"},
        {dokumen: "https://dokumen.pengajuan" , id_user: "637ef3bc0c72fa152431605b"
        ,id_bantuan:"637efc18ee3d0960cfe6097c",status:"Diseleksi"}
    ])
    res.json({
      message: "pengajuan has been created"
    })
  },

}