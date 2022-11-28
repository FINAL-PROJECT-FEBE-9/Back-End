const bantuan = require("../models/bantuan");

module.exports = {
  getAllbantuan: async (req, res) => {
    try {
      const Bantuan = await bantuan.find().populate("nama_bantuan");
      res.status(200).json({
        message: "success get all data bantuan",
        data: Bantuan,
      });
    } catch (err) {
      res.status(404).json({
        status: 404,
        message: "Gagal load data(endpoint mungkin salah/data belum ada)",
      });
    }
  },
  getbantuanByID: async (req, res) => {
    try {
      const bantuanid = req.params.id;
      bantuan.findById(bantuanid, function (err, doc) {
        if (err) {
          res.status(404).json({
            status: 404,
            message: `Data dengan id=${bantuanid} tidak ditemukan`,
          });
        } else {
          res.status(200).json({
            message: `success get data dengan id ${bantuanid}`,
            data: doc,
          });
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 404,
        message: `Data tidak ditemukan `,
      });
    }
  },
  addbantuan: async (req, res) => {
    const data = req.body;
    try {
      let tambahdata = await bantuan.create(data);
      res.status(201).json({
        status: 201,
        message: `berhasil menambahkan data`,
        data: tambahdata,
      });
    } catch {
      res.status(400).json({
        status: 400,
        message: `Data tidak berhasil ditambahkan`,
      });
    }
  },
  deletebantuanByID: async (req, res) => {
    try {
      const bantuanid = req.params.id;
      const deletebantuan = await bantuan.findById(bantuanid);
      if(deletebantuan==null) {
        res.status(404).json({
            status: 404,
            message: `Data bantuan dengan ID=${bantuanid} tidak ditemukan di database`,
        });
      }
      else {
        deletebantuan.remove();
        res.status(200).json({
          status: 200,
          message: "Berhasil hapus data bantuan",
        });
      }
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: "Gagal hapus data bantuan",
      });
    }
  },
  updatebantuanByID : async (req,res) => {
      try{
        const data = req.body;
        const bantuanid = req.params.id;
        await bantuan.findByIdAndUpdate(bantuanid,data);
        const cekupdate = await bantuan.findById(bantuanid)
            res.status(200).json({
                status: 200,
                message: "Berhasil update data bantuan",
                data : cekupdate
              });
      }catch(err){
        res.status(400).json({
            status: 400,
            message: "Gagal Update data bantuan",
          });
      }
        
  }
};
