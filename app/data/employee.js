// 5. You should save your application's data inside of `app/data/employees.js` as an array of objects. Each of these objects should roughly follow the format below.


var surveyArray = [
    {
        name: "Ahmed",
        photo: "https://www2.isye.gatech.edu/people/faculty/Shabbir_Ahmed/Shabbir-Ahmed-2013-d.jpg",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },

    {
        name: "Jacob Deming",
        photo: "https://resizing.flixster.com/oJ25LOxXCBuvm_9qq6jcp2KX1cw=/540x720/v1.bjs3ODk5MDA7ajsxNzg3NDsxMjAwOzU0MDs3MjA",
        scores: [
            4,
            2,
            5,
            1,
            3,
            2,
            2,
            1,
            3,
            2
        ]
    },

    {
        name: "Jeremiah Scanlon",
        photo: "https://cuse.com/images/2016/11/16//Cook_Kramer2016.jpg?width=300",
        scores: [
            5,
            2,
            2,
            2,
            4,
            1,
            3,
            2,
            5,
            5
        ]
    },

    {
        name: "Louis T. Delia",
        photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        scores: [
            3,
            3,
            4,
            2,
            2,
            1,
            3,
            2,
            2,
            3
        ]
    },

    {
        name: "Lou Ritter",
        photo: "https://my.clevelandclinic.org/provider/image?id=20705&width=235",
        scores: [
            4,
            3,
            4,
            1,
            5,
            2,
            5,
            3,
            1,
            4
        ]
    },

    {
        name: "Jordan Biason",
        photo: "https://avatars0.githubusercontent.com/u/16859670?s=460&v=4",
        scores: [
            4,
            4,
            2,
            3,
            2,
            2,
            3,
            2,
            4,
            5
        ]
    },
    {
        name: "Alvaro Martinez",
        photo: "http://s.doctoroz.com/styles/720x480/s3/sites/default/files/media/image_thumb/adrian-martinez-gallery.jpg?itok\u003dkEqo-sTL",
        scores: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }


];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = surveyArray;
