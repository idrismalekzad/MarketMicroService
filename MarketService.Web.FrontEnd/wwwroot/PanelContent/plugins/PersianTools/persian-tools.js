!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? t(exports, require("fastest-levenshtein"))
        : "function" == typeof define && define.amd
        ? define(["exports", "fastest-levenshtein"], t)
        : t(((e || self).PersianTools = {}), e.fastestLevenshtein);
})(this, function (e, t) {
    "use strict";
    var o = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
        c = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
        n = /[0-9]/g,
        r = /[۰۱۲۳۴۵۶۷۸۹]/g,
        a = /[٠١٢٣٤٥٦٧٨٩]/g,
        d = function (e) {
            if ("string" != typeof e && "number" != typeof e) throw TypeError("PersianTools: digitsEnToFa - The input must be string or number");
            return String(e).replace(n, function (e) {
                return "" + o[Number(e)];
            });
        },
        i = function (e) {
            if ("string" != typeof e && "number" != typeof e) throw TypeError("PersianTools: digitsEnToAr - The input must be number or string");
            return String(e).replace(n, function (e) {
                return "" + c[Number(e)];
            });
        },
        p = function (e) {
            if ("string" != typeof e) throw TypeError("PersianTools: digitsFaToEn - The input must be string");
            return String(e).replace(r, function (e) {
                return "" + o.indexOf(e);
            });
        },
        y = /[ي|ﻱ|ﻲ|ﻚ|ك|ﻚ|ﺔ|ﺓ|ة]/g,
        u = "ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی۰۱۲۳۴۵۶۷۸۹َُِ‌آاً",
        s = u + "ًٌٍَُِّْٰٔءك‌ةۀأإيـئؤ،",
        C = function (e, t, o) {
            void 0 === t && (t = !1), void 0 === o && (o = /["'-+()؟\s.]/g);
            var c = e.replace(o, "");
            return new RegExp("^[" + (t ? s : u) + "]+$").test(c);
        },
        l = function (e, t) {
            return void 0 === t && (t = !1), new RegExp("[" + (t ? s : u) + "]").test(e);
        },
        m = function (e) {
            if ("number" != typeof e && "string" != typeof e) return "";
            var t = e.toString(),
                o = (C(t) ? p(t) : t).split(".");
            return o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + (o[1] ? "." + o[1] : "");
        };
    function f(e) {
        if ("string" != typeof e) throw new TypeError("PersianTools: removeCommas - The input must be string");
        var t = "" + e;
        return -1 !== t.indexOf(",") && (t = t.replace(/,\s?/g, "")), Number(t);
    }
    var b = function (e) {
            if (void 0 !== e) return (e = e.replace(new RegExp("مین$", "ig"), "").replace(new RegExp("(ام| اُم)$", "ig"), "")).endsWith("سوم") ? (e = e.slice(0, -3) + "سه") : e.endsWith("م") && (e = e.slice(0, -1)), e;
        },
        g = {
            صفر: 0,
            یک: 1,
            دو: 2,
            سه: 3,
            چهار: 4,
            پنج: 5,
            شش: 6,
            شیش: 6,
            هفت: 7,
            هشت: 8,
            نه: 9,
            ده: 10,
            یازده: 11,
            دوازده: 12,
            سیزده: 13,
            چهارده: 14,
            پانزده: 15,
            شانزده: 16,
            هفده: 17,
            هجده: 18,
            نوزده: 19,
            بیست: 20,
            سی: 30,
            چهل: 40,
            پنجاه: 50,
            شصت: 60,
            هفتاد: 70,
            هشتاد: 80,
            نود: 90,
        },
        h = { صد: 100, یکصد: 100, دویست: 200, سیصد: 300, چهارصد: 400, پانصد: 500, ششصد: 600, هفتصد: 700, هشتصد: 800, نهصد: 900 },
        v = { هزار: 1e3, میلیون: 1e6, بیلیون: 1e9, میلیارد: 1e9, تریلیون: 1e12 },
        N = { "شیش صد": "ششصد", "شش صد": "ششصد", "هفت صد": "هفتصد", "هشت صد": "هشتصد", "نه صد": "نهصد" },
        k = Object.keys(g),
        T = Object.keys(h),
        $ = Object.keys(v),
        A = [].concat(k, T, $),
        B = ["و", " و "],
        I = ["منفی", "مثبت"],
        w = [].concat(A, B, I),
        S = {
            1: "یک",
            2: "دو",
            3: "سه",
            4: "چهار",
            5: "پنج",
            6: "شش",
            7: "هفت",
            8: "هشت",
            9: "نه",
            10: "ده",
            11: "یازده",
            12: "دوازده",
            13: "سیزده",
            14: "چهارده",
            15: "پانزده",
            16: "شانزده",
            17: "هفده",
            18: "هجده",
            19: "نوزده",
            20: "بیست",
            30: "سی",
            40: "چهل",
            50: "پنجاه",
            60: "شصت",
            70: "هفتاد",
            80: "هشتاد",
            90: "نود",
            100: "صد",
            200: "دویست",
            300: "سیصد",
            400: "چهار صد",
            500: "پانصد",
            600: "شش صد",
            700: "هفت صد",
            800: "هشت صد",
            900: "نه صد",
            1e3: "هزار",
            1e6: "میلیون",
            1e9: "میلیارد",
            1e12: "تریلیون",
            1e15: "کوآدریلیون",
        },
        P = function (e) {
            if ("string" != typeof e) throw new TypeError("PersianTools: addOrdinalSuffix - The input must be string");
            return e.endsWith("ی") ? e + " اُم" : e.endsWith("سه") ? e.slice(0, -2) + "سوم" : e + "م";
        },
        E = [
            { code: "169", city: "آذرشهر", parentCode: 1 },
            { code: "170", city: "اسکو", parentCode: 1 },
            { code: "149-150", city: "اهر", parentCode: 1 },
            { code: "171", city: "بستان آباد", parentCode: 1 },
            { code: "168", city: "بناب", parentCode: 1 },
            { code: "136-137-138", city: "تبریز", parentCode: 1 },
            { code: "545", city: "ترکمانچای", parentCode: 1 },
            { code: "505", city: "جلفا", parentCode: 1 },
            { code: "636", city: "چاروایماق", parentCode: 1 },
            { code: "164-165", city: "سراب", parentCode: 1 },
            { code: "172", city: "شبستر", parentCode: 1 },
            { code: "623", city: "صوفیان", parentCode: 1 },
            { code: "506", city: "عجب شیر", parentCode: 1 },
            { code: "519", city: "کلیبر", parentCode: 1 },
            { code: "154-155", city: "مراغه", parentCode: 1 },
            { code: "567", city: "ورزقان", parentCode: 1 },
            { code: "173", city: "هریس", parentCode: 1 },
            { code: "159-160", city: "هشترود", parentCode: 1 },
            { code: "604", city: "هوراند", parentCode: 1 },
            { code: "274-275", city: "ارومیه", parentCode: 2 },
            { code: "295", city: "اشنویه", parentCode: 2 },
            { code: "637", city: "انزل", parentCode: 2 },
            { code: "292", city: "بوکان", parentCode: 2 },
            { code: "492", city: "پلدشت", parentCode: 2 },
            { code: "289", city: "پیرانشهر", parentCode: 2 },
            { code: "677", city: "تخت سلیمان", parentCode: 2 },
            { code: "294", city: "تکاب", parentCode: 2 },
            { code: "493", city: "چایپاره", parentCode: 2 },
            { code: "279-280", city: "خوی", parentCode: 2 },
            { code: "288", city: "سردشت", parentCode: 2 },
            { code: "284-285", city: "سلماس", parentCode: 2 },
            { code: "638", city: "سیلوانه", parentCode: 2 },
            { code: "291", city: "سیه چشمه(چالدران)", parentCode: 2 },
            { code: "640", city: "شوط", parentCode: 2 },
            { code: "293", city: "شاهین دژ", parentCode: 2 },
            { code: "675", city: "کشاورز", parentCode: 2 },
            { code: "282-283", city: "ماکو", parentCode: 2 },
            { code: "286-287", city: "مهاباد", parentCode: 2 },
            { code: "296-297", city: "میاندوآب", parentCode: 2 },
            { code: "290", city: "نقده", parentCode: 2 },
            { code: "400-401", city: "اسدآباد", parentCode: 3 },
            { code: "404-405", city: "بهار", parentCode: 3 },
            { code: "397", city: "تویسرکان", parentCode: 3 },
            { code: "398-399", city: "رزن", parentCode: 3 },
            { code: "647", city: "شراء و پیشخوار", parentCode: 3 },
            { code: "502", city: "فامنین", parentCode: 3 },
            { code: "584", city: "قلقل رود", parentCode: 3 },
            { code: "402-403", city: "کبودرآهنگ", parentCode: 3 },
            { code: "392-393", city: "ملایر", parentCode: 3 },
            { code: "395-396", city: "نهاوند", parentCode: 3 },
            { code: "386-387", city: "همدان", parentCode: 3 },
            { code: "503", city: "ابرکوه", parentCode: 4 },
            { code: "444", city: "اردکان", parentCode: 4 },
            { code: "551", city: "اشکذر", parentCode: 4 },
            { code: "447", city: "بافق", parentCode: 4 },
            { code: "561", city: "بهاباد", parentCode: 4 },
            { code: "445", city: "تفت", parentCode: 4 },
            { code: "718", city: "دستگردان", parentCode: 4 },
            { code: "083", city: "طبس", parentCode: 4 },
            { code: "446", city: "مهریز", parentCode: 4 },
            { code: "448", city: "میبد", parentCode: 4 },
            { code: "552", city: "نیر", parentCode: 4 },
            { code: "543", city: "هرات و مروست", parentCode: 4 },
            { code: "442-443", city: "یزد", parentCode: 4 },
            { code: "051", city: "آشتیان", parentCode: 5 },
            { code: "052-053", city: "اراک", parentCode: 5 },
            { code: "058", city: "تفرش", parentCode: 5 },
            { code: "055", city: "خمین", parentCode: 5 },
            { code: "617", city: "خنداب", parentCode: 5 },
            { code: "057", city: "دلیجان", parentCode: 5 },
            { code: "618", city: "زرند مرکزی", parentCode: 5 },
            { code: "059-060", city: "ساوه", parentCode: 5 },
            { code: "061-062", city: "سربند", parentCode: 5 },
            { code: "544", city: "فراهان", parentCode: 5 },
            { code: "056", city: "محلات", parentCode: 5 },
            { code: "571", city: "وفس", parentCode: 5 },
            { code: "593", city: "هندودر", parentCode: 5 },
            { code: "667", city: "ابوموسی", parentCode: 6 },
            { code: "348", city: "بستک", parentCode: 6 },
            { code: "586", city: "بشاگرد", parentCode: 6 },
            { code: "338-339", city: "بندرعباس", parentCode: 6 },
            { code: "343-344", city: "بندرلنگه", parentCode: 6 },
            { code: "346", city: "جاسک", parentCode: 6 },
            { code: "337", city: "حاجی آباد", parentCode: 6 },
            { code: "554", city: "خمیر", parentCode: 6 },
            { code: "469", city: "رودان", parentCode: 6 },
            { code: "537", city: "فین", parentCode: 6 },
            { code: "345", city: "قشم", parentCode: 6 },
            { code: "470", city: "گاوبندی", parentCode: 6 },
            { code: "341-342", city: "میناب", parentCode: 6 },
            { code: " 483-484", city: "ازنا", parentCode: 7 },
            { code: "557", city: "اشترینان", parentCode: 7 },
            { code: "418", city: "الشتر", parentCode: 7 },
            { code: "416-417", city: "الیگودرز", parentCode: 7 },
            { code: "412-413", city: "بروجرد", parentCode: 7 },
            { code: "592", city: "پاپی", parentCode: 7 },
            { code: "612", city: "چغلوندی", parentCode: 7 },
            { code: "613", city: "چگنی", parentCode: 7 },
            { code: "406-407", city: "خرم آباد", parentCode: 7 },
            { code: "421", city: "دورود", parentCode: 7 },
            { code: "598", city: "رومشکان", parentCode: 7 },
            { code: "419", city: "کوهدشت", parentCode: 7 },
            { code: "385", city: "ملاوی(پلدختر)", parentCode: 7 },
            { code: "420", city: "نورآباد(دلفان)", parentCode: 7 },
            { code: "528", city: "ویسیان", parentCode: 7 },
            { code: "213-214", city: "آمل", parentCode: 8 },
            { code: "205-206", city: "بابل", parentCode: 8 },
            { code: "498", city: "بابل", parentCode: 8 },
            { code: "568", city: "بندپی", parentCode: 8 },
            { code: "711", city: "بندپی شرقی", parentCode: 8 },
            { code: "217-218", city: "بهشهر", parentCode: 8 },
            { code: "221", city: "تنکابن", parentCode: 8 },
            { code: "582", city: "جویبار", parentCode: 8 },
            { code: "483", city: "چالوس", parentCode: 8 },
            { code: "625", city: "چمستان", parentCode: 8 },
            { code: "576", city: "چهاردانگه", parentCode: 8 },
            { code: "578", city: "دودانگه", parentCode: 8 },
            { code: "227", city: "رامسر", parentCode: 8 },
            { code: "208-209", city: "ساری", parentCode: 8 },
            { code: "225", city: "سوادکوه", parentCode: 8 },
            { code: "577", city: "شیرگاه", parentCode: 8 },
            { code: "712", city: "عباس آباد", parentCode: 8 },
            { code: "215-216", city: "قائمشهر", parentCode: 8 },
            { code: "626", city: "کجور", parentCode: 8 },
            { code: "627", city: "کلاردشت", parentCode: 8 },
            { code: "579", city: "گلوگاه", parentCode: 8 },
            { code: "713", city: "میاندورود", parentCode: 8 },
            { code: "499", city: "نکاء", parentCode: 8 },
            { code: "222", city: "نور", parentCode: 8 },
            { code: "219-220", city: "نوشهر", parentCode: 8 },
            { code: "500-501", city: "هراز و محمودآباد", parentCode: 8 },
            { code: "623", city: "آزادشهر", parentCode: 9 },
            { code: "497", city: "آق قلا", parentCode: 9 },
            { code: "223", city: "بندرترکمن", parentCode: 9 },
            { code: "689", city: "بندرگز", parentCode: 9 },
            { code: "487", city: "رامیان", parentCode: 9 },
            { code: "226", city: "علی آباد", parentCode: 9 },
            { code: "224", city: "کردکوی", parentCode: 9 },
            { code: "386", city: "کلاله", parentCode: 9 },
            { code: "211-212", city: "گرگان", parentCode: 9 },
            { code: "628", city: "گمیشان", parentCode: 9 },
            { code: "202-203", city: "گنبد کاووس", parentCode: 9 },
            { code: "531", city: "مراوه تپه", parentCode: 9 },
            { code: "288", city: "مینودشت", parentCode: 9 },
            { code: "261", city: "آستارا", parentCode: 10 },
            { code: "273", city: "آستانه", parentCode: 10 },
            { code: "630", city: "املش", parentCode: 10 },
            { code: "264", city: "بندرانزلی", parentCode: 10 },
            { code: "518", city: "خمام", parentCode: 10 },
            { code: "631", city: "رحیم آباد", parentCode: 10 },
            { code: "258-259", city: "رشت", parentCode: 10 },
            { code: "570", city: "رضوانشهر", parentCode: 10 },
            { code: "265", city: "رودبار", parentCode: 10 },
            { code: "268-269", city: "رودسر", parentCode: 10 },
            { code: "653", city: "سنگر", parentCode: 10 },
            { code: "517", city: "سیاهکل", parentCode: 10 },
            { code: "569", city: "شفت", parentCode: 10 },
            { code: "267", city: "صومعه سرا", parentCode: 10 },
            { code: "262-263", city: "طالش", parentCode: 10 },
            { code: "593", city: "عمارلو", parentCode: 10 },
            { code: "266", city: "فومن", parentCode: 10 },
            { code: "693", city: "کوچصفهان", parentCode: 10 },
            { code: "271-272", city: "لاهیجان", parentCode: 10 },
            { code: "694", city: "لشت نشاء", parentCode: 10 },
            { code: "270", city: "لنگرود", parentCode: 10 },
            { code: "516", city: "ماسال و شاندرمن", parentCode: 10 },
            { code: "333-334", city: "اسلام آباد", parentCode: 11 },
            { code: "691", city: "باینگان", parentCode: 11 },
            { code: "323-322", city: "پاوه", parentCode: 11 },
            { code: "595", city: "ثلاث باباجانی", parentCode: 11 },
            { code: "395", city: "جوانرود", parentCode: 11 },
            { code: "641", city: "حمیل", parentCode: 11 },
            { code: "596", city: "روانسر", parentCode: 11 },
            { code: "336", city: "سرپل ذهاب", parentCode: 11 },
            { code: "335", city: "سنقر", parentCode: 11 },
            { code: "496", city: "صحنه", parentCode: 11 },
            { code: "337", city: "قصرشیرین", parentCode: 11 },
            { code: "324-325", city: "کرمانشاه", parentCode: 11 },
            { code: "394", city: "کرند", parentCode: 11 },
            { code: "330", city: "کنگاور", parentCode: 11 },
            { code: "332", city: "گیلانغرب", parentCode: 11 },
            { code: "331", city: "هرسین", parentCode: 11 },
            { code: "687", city: "باشت", parentCode: 12 },
            { code: "422-423", city: "بویراحمد(یاسوج)", parentCode: 12 },
            { code: "599", city: "بهمنی", parentCode: 12 },
            { code: "600", city: "چاروسا", parentCode: 12 },
            { code: "688", city: "دروهان", parentCode: 12 },
            { code: "424-425", city: "کهکیلویه(دهدشت)", parentCode: 12 },
            { code: "426", city: "گچساران(دوگنبدان)", parentCode: 12 },
            { code: "550", city: "لنده", parentCode: 12 },
            { code: "697", city: "مارگون", parentCode: 12 },
            { code: "384", city: "بانه", parentCode: 13 },
            { code: "377-378", city: "بیجار", parentCode: 13 },
            { code: "558", city: "دهگلان", parentCode: 13 },
            { code: "385", city: "دیواندره", parentCode: 13 },
            { code: "646", city: "سروآباد", parentCode: 13 },
            { code: "375-376", city: "سقز", parentCode: 13 },
            { code: "372-373", city: "سنندج", parentCode: 13 },
            { code: "379-380", city: "قروه", parentCode: 13 },
            { code: "383", city: "کامیاران", parentCode: 13 },
            { code: "674", city: "کرانی", parentCode: 13 },
            { code: "381-382", city: "مریوان", parentCode: 13 },
            { code: "676", city: "نمشیر", parentCode: 13 },
            { code: "722", city: "ارزونیه", parentCode: 14 },
            { code: "542", city: "انار", parentCode: 14 },
            { code: "312-313", city: "بافت", parentCode: 14 },
            { code: "317", city: "بردسیر", parentCode: 14 },
            { code: "310-311", city: "بم", parentCode: 14 },
            { code: "302-303", city: "جیرفت", parentCode: 14 },
            { code: "583", city: "رابر", parentCode: 14 },
            { code: "321", city: "راور", parentCode: 14 },
            { code: "382", city: "راین", parentCode: 14 },
            { code: "304-305", city: "رفسنجان", parentCode: 14 },
            { code: "536", city: "رودبار کهنوج", parentCode: 14 },
            { code: "605", city: "ریگان", parentCode: 14 },
            { code: "308-309", city: "زرند", parentCode: 14 },
            { code: "306-307", city: "سیرجان", parentCode: 14 },
            { code: "319", city: "شهداد", parentCode: 14 },
            { code: "313-314", city: "شهربابک", parentCode: 14 },
            { code: "606", city: "عنبرآباد", parentCode: 14 },
            { code: "320", city: "فهرج", parentCode: 14 },
            { code: "698", city: "قلعه گنج", parentCode: 14 },
            { code: "298-299", city: "کرمان", parentCode: 14 },
            { code: "535", city: "کوهبنان", parentCode: 14 },
            { code: "315-316", city: "کهنوج", parentCode: 14 },
            { code: "318", city: "گلباف", parentCode: 14 },
            { code: "607", city: "ماهان", parentCode: 14 },
            { code: "608", city: "منوجان", parentCode: 14 },
            { code: "508", city: "آبیک", parentCode: 15 },
            { code: "538", city: "آوج", parentCode: 15 },
            { code: "728", city: "البرز", parentCode: 15 },
            { code: "509", city: "بوئین زهرا", parentCode: 15 },
            { code: "438-439", city: "تاکستان", parentCode: 15 },
            { code: "580", city: "رودبار الموت", parentCode: 15 },
            { code: "590", city: "رودبار شهرستان", parentCode: 15 },
            { code: "559", city: "ضیاءآباد", parentCode: 15 },
            { code: "588", city: "طارم سفلی", parentCode: 15 },
            { code: "431-432", city: "قزوین", parentCode: 15 },
            { code: "037-038", city: "قم", parentCode: 16 },
            { code: "702", city: "کهک", parentCode: 16 },
            { code: "240-241", city: "آباده", parentCode: 17 },
            { code: "670", city: "آباده طشک", parentCode: 17 },
            { code: "648", city: "ارسنجان", parentCode: 17 },
            { code: "252", city: "استهبان", parentCode: 17 },
            { code: "678", city: "اشکنان", parentCode: 17 },
            { code: "253", city: "اقلید", parentCode: 17 },
            { code: "649", city: "اوز", parentCode: 17 },
            { code: "513", city: "بوانات", parentCode: 17 },
            { code: "546", city: "بیضا", parentCode: 17 },
            { code: "671", city: "جویم", parentCode: 17 },
            { code: "246-247", city: "جهرم", parentCode: 17 },
            { code: "654", city: "حاجی آباد(زرین دشت)", parentCode: 17 },
            { code: "548", city: "خرامه", parentCode: 17 },
            { code: "547", city: "خشت و کمارج", parentCode: 17 },
            { code: "655", city: "خفر", parentCode: 17 },
            { code: "248-249", city: "داراب", parentCode: 17 },
            { code: "253", city: "سپیدان", parentCode: 17 },
            { code: "514", city: "سروستان", parentCode: 17 },
            { code: "665", city: "سعادت آباد", parentCode: 17 },
            { code: "673", city: "شیبکوه", parentCode: 17 },
            { code: "228-229-230", city: "شیراز", parentCode: 17 },
            { code: "679", city: "فراشبند", parentCode: 17 },
            { code: "256-257", city: "فسا", parentCode: 17 },
            { code: "244-245", city: "فیروزآباد", parentCode: 17 },
            { code: "681", city: "قنقری(خرم بید)", parentCode: 17 },
            { code: "723", city: "قیروکارزین", parentCode: 17 },
            { code: "236-237", city: "کازرون", parentCode: 17 },
            { code: "683", city: "کوار", parentCode: 17 },
            { code: "656", city: "کراش", parentCode: 17 },
            { code: "250-251", city: "لارستان", parentCode: 17 },
            { code: "515", city: "لامرد", parentCode: 17 },
            { code: "242-243", city: "مرودشت", parentCode: 17 },
            { code: "238-239", city: "ممسنی", parentCode: 17 },
            { code: "657", city: "مهر", parentCode: 17 },
            { code: "255", city: "نی ریز", parentCode: 17 },
            { code: "684", city: "ایوانکی", parentCode: 18 },
            { code: "700", city: "بسطام", parentCode: 18 },
            { code: "642", city: "بیارجمند", parentCode: 18 },
            { code: "457", city: "دامغان", parentCode: 18 },
            { code: "456", city: "سمنان", parentCode: 18 },
            { code: "458-459", city: "شاهرود", parentCode: 18 },
            { code: "460", city: "گرمسار", parentCode: 18 },
            { code: "530", city: "مهدیشهر", parentCode: 18 },
            { code: "520", city: "میامی", parentCode: 18 },
            { code: "358-359", city: "ایرانشهر", parentCode: 19 },
            { code: "682", city: "بزمان", parentCode: 19 },
            { code: "703", city: "بمپور", parentCode: 19 },
            { code: "364-365", city: "چابهار", parentCode: 19 },
            { code: "371", city: "خاش", parentCode: 19 },
            { code: "701", city: "دشتیاری", parentCode: 19 },
            { code: "720", city: "راسک", parentCode: 19 },
            { code: "366-367", city: "زابل", parentCode: 19 },
            { code: "704", city: "زابلی", parentCode: 19 },
            { code: "361-362", city: "زاهدان", parentCode: 19 },
            { code: "369-370", city: "سراوان", parentCode: 19 },
            { code: "635", city: "سرباز", parentCode: 19 },
            { code: "668", city: "سیب و سوران", parentCode: 19 },
            { code: "533", city: "شهرکی و ناروئی(زهک)", parentCode: 19 },
            { code: "705", city: "شیب آب", parentCode: 19 },
            { code: "699", city: "فنوج", parentCode: 19 },
            { code: "669", city: "قصرقند", parentCode: 19 },
            { code: "725", city: "کنارک", parentCode: 19 },
            { code: "597", city: "لاشار(اسپکه)", parentCode: 19 },
            { code: "611", city: "میرجاوه", parentCode: 19 },
            { code: "525", city: "نیک شهر", parentCode: 19 },
            { code: "181", city: "آبادان", parentCode: 20 },
            { code: "527", city: "آغاجاری", parentCode: 20 },
            { code: "585", city: "اروندکنار", parentCode: 20 },
            { code: "685", city: "امیدیه", parentCode: 20 },
            { code: "663", city: "اندیکا", parentCode: 20 },
            { code: "192-193", city: "اندیمشک", parentCode: 20 },
            { code: "174-175", city: "اهواز", parentCode: 20 },
            { code: "183-184", city: "ایذه", parentCode: 20 },
            { code: "481", city: "باغ ملک", parentCode: 20 },
            { code: "706", city: "بندر امام خمینی", parentCode: 20 },
            { code: "194-195", city: "بندرماهشهر", parentCode: 20 },
            { code: "185-186", city: "بهبهان", parentCode: 20 },
            { code: "182", city: "خرمشهر", parentCode: 20 },
            { code: "199-200", city: "دزفول", parentCode: 20 },
            { code: "198", city: "دشت آزادگان", parentCode: 20 },
            { code: "662", city: "رامشیر", parentCode: 20 },
            { code: "190-191", city: "رامهرمز", parentCode: 20 },
            { code: "692", city: "سردشت", parentCode: 20 },
            { code: "189", city: "شادگان", parentCode: 20 },
            { code: "707", city: "شاوور", parentCode: 20 },
            { code: "526", city: "شوش", parentCode: 20 },
            { code: "187-188", city: "شوشتر", parentCode: 20 },
            { code: "729", city: "گتوند", parentCode: 20 },
            { code: "730", city: "لالی", parentCode: 20 },
            { code: "196-197", city: "مسجدسلیمان", parentCode: 20 },
            { code: "661", city: "هندیجان", parentCode: 20 },
            { code: "680", city: "هویزه", parentCode: 20 },
            { code: "643", city: "احمدآباد", parentCode: 21 },
            { code: "562", city: "بجستان", parentCode: 21 },
            { code: "572", city: "بردسکن", parentCode: 21 },
            { code: "074", city: "تایباد", parentCode: 21 },
            { code: "644", city: "تخت جلگه", parentCode: 21 },
            { code: "072-073", city: "تربت جام", parentCode: 21 },
            { code: "069-070", city: "تربت حیدریه", parentCode: 21 },
            { code: "521", city: "جغتای", parentCode: 21 },
            { code: "573", city: "جوین", parentCode: 21 },
            { code: "522", city: "چناران", parentCode: 21 },
            { code: "724", city: "خلیل آباد", parentCode: 21 },
            { code: "076", city: "خواف", parentCode: 21 },
            { code: "077", city: "درگز", parentCode: 21 },
            { code: "650", city: "رشتخوار", parentCode: 21 },
            { code: "574", city: "زبرخان", parentCode: 21 },
            { code: "078-079", city: "سبزوار", parentCode: 21 },
            { code: "081", city: "سرخس", parentCode: 21 },
            { code: "084", city: "فریمان", parentCode: 21 },
            { code: "651", city: "فیض آباد", parentCode: 21 },
            { code: "086-087", city: "قوچان", parentCode: 21 },
            { code: "089-090", city: "کاشمر", parentCode: 21 },
            { code: "553", city: "کلات", parentCode: 21 },
            { code: "091", city: "گناباد", parentCode: 21 },
            { code: "092-093-094", city: "مشهد", parentCode: 21 },
            { code: "097", city: "مشهد منطقه2", parentCode: 21 },
            { code: "098", city: "مشهد منطقه3", parentCode: 21 },
            { code: "096", city: "مشهد منطقه1", parentCode: 21 },
            { code: "105-106", city: "نیشابور", parentCode: 21 },
            { code: "063", city: "اسفراین", parentCode: 22 },
            { code: "067-068", city: "بجنورد", parentCode: 22 },
            { code: "075", city: "جاجرم", parentCode: 22 },
            { code: "591", city: "رازوجرکلان", parentCode: 22 },
            { code: "082", city: "شیروان", parentCode: 22 },
            { code: "635", city: "فاروج", parentCode: 22 },
            { code: "524", city: "مانه و سملقان", parentCode: 22 },
            { code: "468", city: "اردل", parentCode: 23 },
            { code: "465", city: "بروجن", parentCode: 23 },
            { code: "461-462", city: "شهرکرد", parentCode: 23 },
            { code: "467", city: "فارسان", parentCode: 23 },
            { code: "632", city: "فلارد", parentCode: 23 },
            { code: "555", city: "کوهرنگ", parentCode: 23 },
            { code: "633", city: "کیار", parentCode: 23 },
            { code: "629", city: "گندمان", parentCode: 23 },
            { code: "466", city: "لردگان", parentCode: 23 },
            { code: "696", city: "میانکوه", parentCode: 23 },
            { code: "721", city: "بشرویه", parentCode: 24 },
            { code: "064-065", city: "بیرجند", parentCode: 24 },
            { code: "523", city: "درمیان", parentCode: 24 },
            { code: "652", city: "زیرکوه", parentCode: 24 },
            { code: "719", city: "سرایان", parentCode: 24 },
            { code: "716", city: "سربیشه", parentCode: 24 },
            { code: "085", city: "فردوس", parentCode: 24 },
            { code: "088", city: "قائنات", parentCode: 24 },
            { code: "563", city: "نهبندان", parentCode: 24 },
            { code: "529", city: "بندر دیلم", parentCode: 25 },
            { code: "353", city: "بندر گناوه", parentCode: 25 },
            { code: "349-350", city: "بوشهر", parentCode: 25 },
            { code: "355", city: "تنگستان", parentCode: 25 },
            { code: "609", city: "جم", parentCode: 25 },
            { code: "351-352", city: "دشتستان", parentCode: 25 },
            { code: "354", city: "دشتی", parentCode: 25 },
            { code: "732", city: "دلوار", parentCode: 25 },
            { code: "357", city: "دیر", parentCode: 25 },
            { code: "532", city: "سعد آباد", parentCode: 25 },
            { code: "610", city: "شبانکاره", parentCode: 25 },
            { code: "356", city: "کنگان", parentCode: 25 },
            { code: "556", city: "اسلامشهر", parentCode: 26 },
            { code: "658", city: "پاکدشت", parentCode: 26 },
            { code: "001-002-003-004-005-006-007-008", city: "تهران مرکزی", parentCode: 26 },
            { code: "011", city: "تهران جنوب", parentCode: 26 },
            { code: "020", city: "تهران شرق", parentCode: 26 },
            { code: "025", city: "تهرانشمال", parentCode: 26 },
            { code: "015", city: "تهران غرب", parentCode: 26 },
            { code: "043", city: "دماوند", parentCode: 26 },
            { code: "666", city: "رباط کریم", parentCode: 26 },
            { code: "489", city: "ساوجبلاغ", parentCode: 26 },
            { code: "044-045", city: "شمیران", parentCode: 26 },
            { code: "048-049", city: "شهرری", parentCode: 26 },
            { code: "490-491", city: "شهریار", parentCode: 26 },
            { code: "695", city: "طالقان", parentCode: 26 },
            { code: "659", city: "فیروزکوه", parentCode: 26 },
            { code: "031-032", city: "کرج", parentCode: 26 },
            { code: "664", city: "کهریزک", parentCode: 26 },
            { code: "717", city: "نظرآباد", parentCode: 26 },
            { code: "041-042", city: "ورامین", parentCode: 26 },
            { code: "471-472", city: "امور خارجه", parentCode: 27 },
            { code: "454", city: "آبدانان", parentCode: 28 },
            { code: "581", city: "ارکوازی(ملکشاهی)", parentCode: 28 },
            { code: "449-450", city: "ایلام", parentCode: 28 },
            { code: "616", city: "ایوان", parentCode: 28 },
            { code: "534", city: "بدره", parentCode: 28 },
            { code: "455", city: "دره شهر", parentCode: 28 },
            { code: "451", city: "دهلران", parentCode: 28 },
            { code: "726", city: "زرین آباد", parentCode: 28 },
            { code: "634", city: "شیروان لومار", parentCode: 28 },
            { code: "453", city: "شیروان و چرداول", parentCode: 28 },
            { code: "727", city: "موسیان", parentCode: 28 },
            { code: "452", city: "مهران", parentCode: 28 },
            { code: "145-146", city: "اردبیل", parentCode: 29 },
            { code: "731", city: "ارشق", parentCode: 29 },
            { code: "690", city: "انگوت", parentCode: 29 },
            { code: "601", city: "بیله سوار", parentCode: 29 },
            { code: "504", city: "پارس آباد", parentCode: 29 },
            { code: "163", city: "خلخال", parentCode: 29 },
            { code: "714", city: "خورش رستم", parentCode: 29 },
            { code: "715", city: "سرعین", parentCode: 29 },
            { code: "566", city: "سنجبد(کوثر)", parentCode: 29 },
            { code: "166-167", city: "مشکین شهر", parentCode: 29 },
            { code: "161-162", city: "مغان", parentCode: 29 },
            { code: "686", city: "نمین", parentCode: 29 },
            { code: "603", city: "نیر", parentCode: 29 },
            { code: "619", city: "آران و بیدگل", parentCode: 30 },
            { code: "118", city: "اردستان", parentCode: 30 },
            { code: "127-128-129", city: "اصفهان", parentCode: 30 },
            { code: "620", city: "باغ بهادران", parentCode: 30 },
            { code: "621", city: "بوئین و میاندشت", parentCode: 30 },
            { code: "549", city: "تیران و کرون", parentCode: 30 },
            { code: "564", city: "جرقویه", parentCode: 30 },
            { code: "575", city: "چادگان", parentCode: 30 },
            { code: "113-114", city: "خمینی شهر", parentCode: 30 },
            { code: "122", city: "خوانسار", parentCode: 30 },
            { code: "540", city: "خور و بیابانک", parentCode: 30 },
            { code: "660", city: "دولت آباد", parentCode: 30 },
            { code: "120", city: "سمیرم", parentCode: 30 },
            { code: "512", city: "سمیرم سفلی (دهاقان)", parentCode: 30 },
            { code: "510-511", city: "شاهین شهر", parentCode: 30 },
            { code: "119", city: "شهرضا", parentCode: 30 },
            { code: "115", city: "فریدن", parentCode: 30 },
            { code: "112", city: "فریدونشهر", parentCode: 30 },
            { code: "110-111", city: "فلاورجان", parentCode: 30 },
            { code: "125-126", city: "کاشان", parentCode: 30 },
            { code: "565", city: "کوهپایه", parentCode: 30 },
            { code: "121", city: "گلپایگان", parentCode: 30 },
            { code: "116-117", city: "لنجان(زرینشهر)", parentCode: 30 },
            { code: "541", city: "مبارکه", parentCode: 30 },
            { code: "622", city: "میمه", parentCode: 30 },
            { code: "124", city: "نائین", parentCode: 30 },
            { code: "108-109", city: "نجف آباد", parentCode: 30 },
            { code: "123", city: "نطنز", parentCode: 30 },
            { code: "428-427", city: "زنجان", parentCode: 30 },
            { code: "507", city: "ملکان", parentCode: 30 },
            { code: "158", city: "مرند", parentCode: 30 },
            { code: "615", city: "ابهر", parentCode: 30 },
            { code: "615", city: "خرمدره", parentCode: 30 },
            { code: "152-153", city: "میانه", parentCode: 30 },
        ],
        M = [
            { code: 1, city: "آذربایجان شرقی" },
            { code: 2, city: "آذربایجان غربی" },
            { code: 3, city: "همدان" },
            { code: 4, city: "یزد" },
            { code: 5, city: "مرکزی" },
            { code: 6, city: "هرمزگان" },
            { code: 7, city: "لرستان" },
            { code: 8, city: "مازندران" },
            { code: 9, city: "گلستان" },
            { code: 10, city: "گیلان" },
            { code: 11, city: "کرمانشاه" },
            { code: 12, city: "کهکیلویه و بویراحمد" },
            { code: 13, city: "کردستان" },
            { code: 14, city: "کرمان" },
            { code: 15, city: "قزوین" },
            { code: 16, city: "قم" },
            { code: 17, city: "فارس" },
            { code: 18, city: "سمنان" },
            { code: 19, city: "سیستان و بلوچستان" },
            { code: 20, city: "خوزستان" },
            { code: 21, city: "خراسان رضوی" },
            { code: 22, city: "خراسان شمالی" },
            { code: 23, city: "چهارمحال و بختیاری" },
            { code: 24, city: "خراسان جنوبی" },
            { code: 25, city: "بوشهر" },
            { code: 26, city: "تهران" },
            { code: 27, city: "امور خارجه" },
            { code: 28, city: "ایلام" },
            { code: 29, city: "اردبیل" },
            { code: 30, city: "اصفهان" },
        ];
    function x(e) {
        if (e) {
            var t = String(e);
            if (t.length < 16 || 0 === parseInt(t.substr(1, 10), 10) || 0 === parseInt(t.substr(10, 6), 10)) return !1;
            for (var o, c, n = 0, r = 0; r < 16; r++) (o = r % 2 == 0 ? 2 : 1), (n += (c = parseInt(t.substr(r, 1), 10) * o) > 9 ? c - 9 : c);
            return n % 10 == 0;
        }
    }
    var O = new RegExp("([۰-۹0-9-_.*]{16,20})", "img"),
        j = /[-_.*]/g,
        R = [
            { name: "بانک آینده", code: "636214" },
            { name: "بانک اقتصاد نوین", code: "627412" },
            { name: "بانک انصار", code: "627381" },
            { name: "بانک ایران زمین", code: "505785" },
            { name: "بانک پارسیان", code: "622106" },
            { name: "بانک پارسیان", code: "627884" },
            { name: "بانک پاسارگاد", code: "502229" },
            { name: "بانک پاسارگاد", code: "639347" },
            { name: "پست بانک ایران", code: "627760" },
            { name: "بانک تجارت", code: "585983" },
            { name: "بانک تجارت", code: "627353" },
            { name: "بانک توسعه تعاون", code: "502908" },
            { name: "بانک توسعه صادرات", code: "207177" },
            { name: "بانک توسعه صادرات", code: "627648" },
            { name: "بانک حکمت ایرانیان", code: "636949" },
            { name: "بانک خاورمیانه", code: "585949" },
            { name: "بانک دی", code: "502938" },
            { name: "بانک رسالت", code: "504172" },
            { name: "بانک رفاه کارگران", code: "589463" },
            { name: "بانک سامان", code: "621986" },
            { name: "بانک سپه", code: "589210" },
            { name: "بانک سرمایه", code: "639607" },
            { name: "بانک سینا", code: "639346" },
            { name: "بانک شهر", code: "502806" },
            { name: "بانک شهر", code: "504706" },
            { name: "بانک صادرات ایران", code: "603769" },
            { name: "بانک صادرات ایران", code: "903769" },
            { name: "بانک صنعت و معدن", code: "627961" },
            { name: "بانک قرض الحسنه مهر", code: "639370" },
            { name: "بانک قوامین", code: "639599" },
            { name: "بانک کارآفرین", code: "627488" },
            { name: "بانک کشاورزی", code: "603770" },
            { name: "بانک کشاورزی", code: "639217" },
            { name: "بانک گردشگری", code: "505416" },
            { name: "بانک گردشگری", code: "505426" },
            { name: "بانک مرکزی ایران", code: "636797" },
            { name: "بانک مسکن", code: "628023" },
            { name: "بانک ملت", code: "610433" },
            { name: "بانک ملت", code: "991975" },
            { name: "بانک ملی ایران", code: "170019" },
            { name: "بانک ملی ایران", code: "603799" },
            { name: "بانک مهر ایران", code: "606373" },
            { name: "موسسه کوثر", code: "505801" },
            { name: "موسسه اعتباری ملل", code: "606256" },
            { name: "موسسه اعتباری توسعه", code: "628157" },
        ];
    function D(e) {
        if (e) {
            if (e && 16 === e.toString().length) {
                var t = e.toString().substr(0, 6),
                    o = R.find(function (e) {
                        return e.code === t;
                    });
                return o ? o.name : null;
            }
            return null;
        }
    }
    var V = { 1: "آب", 2: "برق", 3: "گاز", 4: "تلفن ثابت", 5: "تلفن همراه", 6: "عوارض شهرداری", 8: "سازمان مالیات", 9: "جرایم راهنمایی و رانندگی" },
        F = /*#__PURE__*/ (function () {
            function e(e) {
                var t = e.billId,
                    o = e.paymentId,
                    c = e.currency,
                    n = e.barcode;
                (this.barcode = void 0),
                    (this.currency = void 0),
                    (this.billTypes = void 0),
                    (this.billId = void 0),
                    (this.billPayment = void 0),
                    (this.barcode = n || null),
                    (this.currency = c || "toman"),
                    (this.billId = null),
                    (this.billPayment = null),
                    (this.billTypes = V),
                    t && o && (this.setId(t), this.setPaymentId(o));
            }
            var t = e.prototype;
            return (
                (t.setId = function (e) {
                    this.billId = e;
                }),
                (t.setPaymentId = function (e) {
                    this.billPayment = e;
                }),
                (t.getAmount = function () {
                    var e = "rial" == this.currency ? 1e3 : 100;
                    return parseInt(("" + this.billPayment).slice(0, -5)) * e;
                }),
                (t.getBillType = function () {
                    var e, t;
                    return null != (e = this.billTypes[Number(null == (t = String(this.billId)) ? void 0 : t.slice(-2, -1))]) ? e : "unknown";
                }),
                (t.getBarcode = function () {
                    return this.billId + "000" + this.billPayment;
                }),
                (t.findByBarcode = function (e) {
                    var t = e || this.barcode;
                    return { billId: Number(t.substr(0, 13)), paymentId: Number(t.substr(16, 10)) };
                }),
                (t.verificationBillPayment = function () {
                    var e = "" + this.billId,
                        t = "" + this.billPayment;
                    if (!t || t.length < 6) return !1;
                    var o = t.charAt(t.length - 2) + "",
                        c = t.charAt(t.length - 1) + "";
                    return (t = t.substr(0, t.length - 2)), this.CalTheBit(t) === Number(o) && this.CalTheBit(e + t + o) === Number(c);
                }),
                (t.verificationBillId = function () {
                    var e,
                        t = "" + this.billId;
                    if (!t || t.length < 6) return !1;
                    var o = t.substr(t.length - 1);
                    (t = t.substr(0, t.length - 1)), (e = this.CalTheBit(t) === Number(o));
                    var c = this.getBillType();
                    return e && "unknown" !== c;
                }),
                (t.CalTheBit = function (e) {
                    for (var t = 0, o = 2, c = 0; c < e.length; c++) {
                        8 === o && (o = 2);
                        var n = e.substring(e.length - 1 - c, e.length - c);
                        (t += Number(n) * o), o++;
                    }
                    return (t %= 11) < 2 ? 0 : 11 - t;
                }),
                (t.verificationBill = function () {
                    return this.verificationBillPayment() && this.verificationBillId();
                }),
                (t.getResult = function () {
                    return { amount: this.getAmount(), type: this.getBillType(), barcode: this.getBarcode(), isValid: this.verificationBill(), isValidBillId: this.verificationBillId(), isValidBillPayment: this.verificationBillPayment() };
                }),
                e
            );
        })();
    function z() {
        return (
            (z =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (e[c] = o[c]);
                    }
                    return e;
                }),
            z.apply(this, arguments)
        );
    }
    var L = {
            10: { code: "010", nickname: "central-bank", name: "Central Bank of Iran", persianName: "بانک مرکزی جمهوری اسلامی ایران", accountNumberAvailable: !1 },
            11: { code: "011", nickname: "sanat-o-madan", name: "Sanat O Madan Bank", persianName: "بانک صنعت و معدن", accountNumberAvailable: !1 },
            12: { code: "012", nickname: "mellat", name: "Mellat Bank", persianName: "بانک ملت", accountNumberAvailable: !1 },
            13: { code: "013", nickname: "refah", name: "Refah Bank", persianName: "بانک رفاه کارگران", accountNumberAvailable: !1 },
            14: { code: "014", nickname: "maskan", name: "Maskan Bank", persianName: "بانک مسکن", accountNumberAvailable: !1 },
            15: { code: "015", nickname: "sepah", name: "Sepah Bank", persianName: "بانک سپه", accountNumberAvailable: !1 },
            16: { code: "016", nickname: "keshavarzi", name: "Keshavarzi", persianName: "بانک کشاورزی", accountNumberAvailable: !1 },
            17: { code: "017", nickname: "melli", name: "Melli", persianName: "بانک ملی ایران", accountNumberAvailable: !1 },
            18: { code: "018", nickname: "tejarat", name: "Tejarat Bank", persianName: "بانک تجارت", accountNumberAvailable: !1 },
            19: { code: "019", nickname: "saderat", name: "Saderat Bank", persianName: "بانک صادرات ایران", accountNumberAvailable: !1 },
            20: { code: "020", nickname: "tosee-saderat", name: "Tose Saderat Bank", persianName: "بانک توسعه صادرات", accountNumberAvailable: !1 },
            21: { code: "021", nickname: "post", name: "Post Bank", persianName: "پست بانک ایران", accountNumberAvailable: !1 },
            22: { code: "022", nickname: "toose-taavon", name: "Tosee Taavon Bank", persianName: "بانک توسعه تعاون", accountNumberAvailable: !1 },
            51: { code: "051", nickname: "tosee", name: "Tosee Bank", persianName: "موسسه اعتباری توسعه", accountNumberAvailable: !1 },
            52: { code: "052", nickname: "ghavamin", name: "Ghavamin Bank", persianName: "بانک قوامین", accountNumberAvailable: !1 },
            53: { code: "053", nickname: "karafarin", name: "Karafarin Bank", persianName: "بانک کارآفرین", accountNumberAvailable: !1 },
            54: {
                code: "054",
                nickname: "parsian",
                name: "Parsian Bank",
                persianName: "بانک پارسیان",
                accountNumberAvailable: !0,
                process: function (e) {
                    var t = "0" + (e = e.substring(14)).substr(0, 2) + "-0" + e.substr(2, 7) + "-" + e.substr(9, 3);
                    return { normal: e, formatted: t };
                },
            },
            55: { code: "055", nickname: "eghtesad-novin", name: "Eghtesad Novin Bank", persianName: "بانک اقتصاد نوین", accountNumberAvailable: !1 },
            56: { code: "056", nickname: "saman", name: "Saman Bank", persianName: "بانک سامان", accountNumberAvailable: !1 },
            57: {
                code: "057",
                nickname: "pasargad",
                name: "Pasargad Bank",
                persianName: "بانک پاسارگاد",
                accountNumberAvailable: !0,
                process: function (e) {
                    for (e = e.substring(7); "0" === e[0]; ) e = e.substring(1);
                    var t = (e = e.substr(0, e.length - 2)).substr(0, 3) + "-" + e.substr(3, 3) + "-" + e.substr(6, 8) + "-" + e.substr(14, 1);
                    return { normal: e, formatted: t };
                },
            },
            58: { code: "058", nickname: "sarmayeh", name: "Sarmayeh Bank", persianName: "بانک سرمایه", accountNumberAvailable: !1 },
            59: { code: "059", nickname: "sina", name: "Sina Bank", persianName: "بانک سینا", accountNumberAvailable: !1 },
            60: { code: "060", nickname: "mehr-iran", name: "Mehr Iran Bank", persianName: "بانک مهر ایران", accountNumberAvailable: !1 },
            61: {
                code: "061",
                nickname: "shahr",
                name: "City Bank",
                persianName: "بانک شهر",
                accountNumberAvailable: !0,
                process: function (e) {
                    for (e = e.substring(7); "0" === e[0]; ) e = e.substring(1);
                    return { normal: e, formatted: e };
                },
            },
            62: { code: "062", nickname: "ayandeh", name: "Ayandeh Bank", persianName: "بانک آینده", accountNumberAvailable: !1 },
            63: { code: "063", nickname: "ansar", name: "Ansar Bank", persianName: "بانک انصار", accountNumberAvailable: !1 },
            64: { code: "064", nickname: "gardeshgari", name: "Gardeshgari Bank", persianName: "بانک گردشگری", accountNumberAvailable: !1 },
            65: { code: "065", nickname: "hekmat-iranian", name: "Hekmat Iranian Bank", persianName: "بانک حکمت ایرانیان", accountNumberAvailable: !1 },
            66: { code: "066", nickname: "dey", name: "Dey Bank", persianName: "بانک دی", accountNumberAvailable: !1 },
            69: { code: "069", nickname: "iran-zamin", name: "Iran Zamin Bank", persianName: "بانک ایران زمین", accountNumberAvailable: !1 },
            70: { code: "070", nickname: "resalat", name: "Resalat Bank", persianName: "بانک قرض الحسنه رسالت", accountNumberAvailable: !1 },
            73: { code: "073", nickname: "kosar", name: "Kosar Credit Institute", persianName: "موسسه اعتباری کوثر", accountNumberAvailable: !1 },
            75: { code: "075", nickname: "melal", name: "Melal Credit Institute", persianName: "موسسه اعتباری ملل", accountNumberAvailable: !1 },
            78: { code: "078", nickname: "middle-east-bank", name: "Middle East Bank", persianName: "بانک خاورمیانه", accountNumberAvailable: !1 },
            80: { code: "080", nickname: "noor-bank", name: "Noor Credit Institution", persianName: "موسسه اعتباری نور", accountNumberAvailable: !1 },
            79: { code: "079", nickname: "mehr-eqtesad", name: "Mehr Eqtesad Bank", persianName: "بانک مهر اقتصاد", accountNumberAvailable: !1 },
            90: { code: "090", nickname: "mehr-iran", name: "Mehr Iran Bank", persianName: "بانک مهر ایران", accountNumberAvailable: !1 },
            95: { code: "095", nickname: "iran-venezuela", name: "Iran and Venezuela Bank", persianName: "بانک ایران و ونزوئلا", accountNumberAvailable: !1 },
        },
        W = /IR[0-9]{24}/,
        K = /IR[0-9]{2}([0-9]{3})[0-9]{19}/;
    function _(e) {
        for (var t, o = e; o.length > 2; ) (t = o.slice(0, 9)), (o = (parseInt(t, 10) % 97) + o.slice(t.length));
        return parseInt(o, 10) % 97;
    }
    function q(e) {
        if (26 !== e.length) return !1;
        if (!W.test(e)) return !1;
        var t = e.charCodeAt(0) - 65 + 10,
            o = e.charCodeAt(1) - 65 + 10,
            c = e.substr(4);
        return 1 === _((c += t.toString() + o.toString() + e.substr(2, 2)));
    }
    var H = {
        Car: {
            10: "تهران",
            11: "تهران",
            12: "خراسان رضوی",
            13: "اصفحان",
            14: "خوزستان",
            15: "آذربایجان شرقی",
            16: "قم",
            17: "آذربایجان غربی",
            18: "همدان",
            19: "کرمانشاه",
            20: "تهران",
            21: "تهران - البرز",
            22: "تهران",
            23: "اصفحان",
            24: "خوزستان",
            25: "آذربایجان شرقی",
            26: "خراسان شمالی",
            27: "آذربایجان غربی",
            28: "همدان",
            29: "کرمانشاه",
            30: "تهران - البرز",
            31: "لرستان",
            32: "خراسان شمالی - خراسان جنوبی - خراسان رضوی",
            33: "تهران",
            34: "خوزستان",
            35: "آذربایجان شرقی",
            36: "خراسان رضوی",
            37: "آذربایجان غربی",
            38: "تهران - البرز",
            40: "تهران",
            41: "لرستان",
            42: "خراسان رضوی",
            43: "اصفحان",
            44: "تهران",
            45: "یزد",
            46: "گیلان",
            47: "مرکزی",
            48: "بوشهر",
            49: "کهگیلویه و بویراحمد",
            51: "کردستان",
            52: "خراسان جنوبی",
            53: "اصفحان",
            55: "تهران",
            56: "گیلان",
            57: "مرکزی",
            58: "بوشهر",
            59: "گلستان",
            61: "کردستان",
            62: "مازندران",
            63: "فارس",
            64: "یزد",
            65: "کرمان",
            66: "تهران",
            67: "اصفحان",
            68: "البرز",
            69: "گلستان",
            71: "چهارمحال و بختیاری",
            72: "مازندران",
            73: "فارس",
            74: "خراسان رضوی",
            75: "کرمان",
            76: "گیلان",
            77: "تهران",
            78: "تهران - البرز",
            79: "قزوین",
            81: "چهارمحال و بختیاری",
            82: "مازندران",
            83: "فارس",
            84: "هرمزگان",
            85: "سیستان و بلوچستان",
            86: "سمنان",
            87: "زنجان",
            88: "تهران",
            89: "قزوین",
            91: "اردبیل",
            92: "مازندران",
            93: "فارس",
            94: "هرمزگان",
            95: "سیستان و بلوچستان",
            96: "سمنان",
            97: "زنجان",
            98: "ایلام",
            99: "تهران",
        },
        Motorcycle: {
            111: "مرکز تهران",
            112: "مرکز تهران",
            113: "مرکز تهران",
            114: "مرکز تهران",
            115: "مرکز تهران",
            116: "مرکز تهران",
            117: "مرکز تهران",
            118: "مرکز تهران",
            119: "مرکز تهران",
            120: "مرکز تهران",
            121: "مرکز تهران",
            122: "مرکز تهران",
            123: "مرکز تهران",
            124: "مرکز تهران",
            125: "مرکز تهران",
            126: "مرکز تهران",
            127: "مرکز تهران",
            128: "مرکز تهران",
            129: "مرکز تهران",
            130: "مرکز تهران",
            131: "مرکز تهران",
            132: "مرکز تهران",
            133: "مرکز تهران",
            134: "مرکز تهران",
            135: "مرکز تهران",
            136: "مرکز تهران",
            137: "مرکز تهران",
            138: "مرکز تهران",
            319: "البرز و شهرستان های تهران",
            321: "البرز و شهرستان های تهران",
            322: "البرز و شهرستان های تهران",
            323: "البرز و شهرستان های تهران",
            324: "البرز و شهرستان های تهران",
            371: "آذربایجان غربی",
            372: "آذربایجان غربی",
            373: "آذربایجان غربی",
            374: "آذربایجان غربی",
            375: "آذربایجان غربی",
            376: "آذربایجان غربی",
            377: "آذربایجان غربی",
            391: "آذربایجان شرقی",
            392: "آذربایجان شرقی",
            393: "آذربایجان شرقی",
            394: "آذربایجان شرقی",
            395: "آذربایجان شرقی",
            396: "آذربایجان شرقی",
            397: "آذربایجان شرقی",
            442: "اردبیل",
            443: "اردبیل",
            461: "کردستان",
            462: "کردستان",
            479: "زنجان",
            481: "زنجان",
            482: "زنجان",
            498: "همدان",
            499: "همدان",
            511: "همدان",
            514: "کرمانشاه",
            515: "کرمانشاه",
            516: "کرمانشاه",
            517: "کرمانشاه",
            523: "قزوین",
            524: "قزوین",
            525: "قزوین",
            531: "مرکزی",
            532: "مرکزی",
            533: "مرکزی",
            534: "مرکزی",
            535: "مرکزی",
            538: "لرستان",
            539: "لرستان",
            540: "لرستان",
            541: "لرستان",
            542: "لرستان",
            543: "لرستان",
            547: "ایلام",
            555: "چهارمحال و بختیاری",
            561: "خوزستان",
            562: "خوزستان",
            563: "خوزستان",
            564: "خوزستان",
            565: "خوزستان",
            566: "خوزستان",
            567: "خوزستان",
            568: "خوزستان",
            569: "خوزستان",
            571: "کهگیلویه و بویراحمد",
            578: "گیلان",
            579: "گیلان",
            581: "گیلان",
            582: "گیلان",
            586: "مازندران",
            587: "مازندران",
            588: "مازندران",
            589: "مازندران",
            596: "گلستان",
            597: "گلستان",
            611: "قم",
            612: "قم",
            613: "قم",
            614: "قم",
            637: "یزد",
            638: "یزد",
            639: "یزد",
            641: "یزد",
            642: "یزد",
            643: "یزد",
            687: "فارس",
            688: "فارس",
            689: "فارس",
            691: "فارس",
            692: "فارس",
            693: "فارس",
            694: "فارس",
            695: "فارس",
            696: "فارس",
            697: "فارس",
            751: "سمنان",
            752: "سمنان",
            753: "سمنان",
            761: "خراسان رضوی",
            762: "خراسان رضوی",
            763: "خراسان رضوی",
            764: "خراسان رضوی",
            765: "خراسان رضوی",
            766: "خراسان رضوی",
            767: "خراسان رضوی",
            768: "خراسان رضوی",
            769: "خراسان رضوی",
            771: "خراسان رضوی",
            772: "خراسان رضوی",
            773: "خراسان رضوی",
            774: "خراسان رضوی",
            775: "خراسان رضوی",
            776: "خراسان رضوی",
            777: "خراسان رضوی",
            779: "خراسان شمالی",
            781: "خراسان شمالی",
            791: "خراسان جنوبی",
            792: "خراسان جنوبی",
            812: "کرمان",
            813: "کرمان",
            814: "کرمان",
            815: "کرمان",
            816: "کرمان",
            817: "کرمان",
            819: "سیستان و بلوچستان",
            821: "سیستان و بلوچستان",
            822: "سیستان و بلوچستان",
            823: "سیستان و بلوچستان",
            827: "بوشهر",
            828: "بوشهر",
            829: "بوشهر",
            831: "بوشهر",
            835: "هرمزگان",
            836: "هرمزگان",
            837: "هرمزگان",
            838: "هرمزگان",
            839: "هرمزگان",
        },
        Category: {
            D: "دیپلمات",
            S: "سفارتخانه ها ",
            ف: "ستاد کل نیرو های مسلح",
            ز: "وزارت دفاع و پشتیبانی",
            ش: "ارتش",
            تشریفات: "تشریفات",
            الف: "دولتی",
            پ: "پلیس",
            ث: "سپاه",
            ک: "کشاورزی",
            ع: "حمل و نقل عمومی",
            گ: "گذر موقت",
            ژ: "معلولان و جانبازان",
            ب: "شخصی",
            ج: "شخصی",
            د: "شخصی",
            س: "شخصی",
            ص: "شخصی",
            ط: "شخصی",
            ق: "شخصی",
            ل: "شخصی",
            م: "شخصی",
            ن: "شخصی",
            و: "شخصی",
            ه: "شخصی",
            ی: "شخصی",
        },
    };
    function G(e) {
        var t = +e.numbers.slice(5, 7),
            o = "" + e.numbers.slice(0, 2) + (e.char ? e.char : null) + e.numbers.slice(2, 5) + "ایران" + t,
            c = H.Car[t],
            n = e.char ? H.Category[e.char] : null;
        return { type: "Car", template: o, details: { firstTwoDigits: e.numbers.slice(0, 2), plateCharacter: e.char || null, nextThreeDigits: e.numbers.slice(2, 5), provinceCode: t.toString() }, province: c || null, category: n };
    }
    function U(e) {
        var t = +e.numbers.slice(0, 3);
        return { type: "Motorcycle", template: t + "-" + e.numbers.slice(3), province: H.Motorcycle[t] || null, details: { digits: e.numbers.slice(3), provinceCode: t.toString() }, category: null };
    }
    var Y = "همراه اول",
        Z = "ایرانسل",
        J = "رایتل",
        Q = {
            910: { base: "کشوری", province: [], type: ["permanent", "credit"], operator: Y },
            914: { province: ["آذربایجان شرقی", "اردبیل", "اصفهان"], base: "آذربایجان غربی", type: ["permanent", "credit"], operator: Y },
            911: { province: ["گلستان", "گیلان"], base: "مازندران", type: ["permanent", "credit"], operator: Y },
            912: { province: ["البرز", "زنجان", "سمنان", "قزوین", "قم", "برخی از شهرستان های استان مرکزی"], base: "تهران", type: ["permanent"], operator: Y },
            913: { province: ["یزد", "چهارمحال و بختیاری", "کرمان"], base: "اصفهان", type: ["permanent", "credit"], operator: Y },
            915: { province: ["خراسان شمالی", "خراسان جنوبی", "سیستان و بلوچستان"], base: "خراسان رضوی", type: ["permanent", "credit"], operator: Y },
            916: { province: ["لرستان", "فارس", "اصفهان"], base: "خوزستان", type: ["permanent", "credit"], operator: Y },
            917: { province: ["بوشهر", "کهگیلویه و بویر احمد", "هرمزگان"], base: "فارس", type: ["permanent", "credit"], operator: Y },
            918: { province: ["کردستان", "ایلام", "همدان"], base: "کرمانشاه", type: ["permanent", "credit"], operator: Y },
            919: { province: ["البرز", "سمنان", "قم", "قزوین", "زنجان"], base: "تهران", type: ["credit"], operator: Y },
            990: { province: [], base: "کشوری", type: ["credit"], operator: Y },
            991: { province: [], base: "کشوری", type: ["permanent", "credit"], operator: Y },
            992: { province: [], base: "کشوری", type: ["credit"], operator: Y },
            993: { province: [], base: "کشوری", type: ["credit"], operator: Y },
            994: { province: [], base: "کشوری", type: ["credit"], operator: Y },
        },
        X = { 932: { province: [], base: "کشوری", type: ["credit"], operator: "تالیا" } },
        ee = { 920: { province: [], base: "کشوری", type: ["permanent"], operator: J }, 921: { province: [], base: "کشوری", type: ["credit"], operator: J }, 922: { province: [], base: "کشوری", type: ["credit"], operator: J } },
        te = { province: [], base: "کشوری", type: ["permanent", "credit"], operator: Z },
        oe = {
            930: te,
            933: te,
            935: te,
            936: te,
            937: te,
            938: te,
            939: te,
            901: te,
            902: te,
            903: te,
            905: te,
            904: { province: [], base: "کشوری", model: "سیم‌کارت کودک", type: ["credit"], operator: Z },
            941: { province: [], base: "کشوری", model: "TD-LTE", type: ["credit"], operator: Z },
        },
        ce = { 998: { province: [], base: "کشوری", type: ["credit"], operator: "شاتل موبایل" } },
        ne = [].concat(Object.keys(Q), Object.keys(X), Object.keys(ee), Object.keys(oe), Object.keys(ce)),
        re = z({}, Q, X, oe, ce, ee),
        ae = /^(\+98|98|0098|0)?9\d{9}$/;
    function de(e) {
        var t = ("" + e).match(ae);
        return (t && e.replace(t[1], "").slice(0, 3)) || "";
    }
    function ie(e) {
        return ae.test(e) && ne.includes(de(e));
    }
    function pe(e) {
        var t = e.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/);
        if (t) return new Date(Number(t[1]), parseInt(t[2], 10) - 1, Number(t[3]), Number(t[4]), Number(t[5]), Number(t[6])).getTime();
        throw new TypeError("PersianTools: convertToTimeStamp - The input format must be yyyy/mm/dd hh:mm:ss");
    }
    function ye() {
        var e = Date.now(),
            t = new Date(e).toLocaleString("fa-IR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).replace(/‏|،/g, "");
        return pe(p(t));
    }
    var ue = 31536e3,
        se = 2592e3,
        Ce = 86400,
        le = 3600;
    (e.Bill = F),
        (e.Plate = function (e) {
            var t,
                o,
                c,
                n = (function (e) {
                    var t,
                        o,
                        c,
                        n = /\D/g;
                    return "string" == typeof e ? ((t = null == (c = e.match(n)) ? void 0 : c.join("")), (o = e.replace(n, ""))) : ((t = null == e ? void 0 : e.char), (o = e.number.replace(n, ""))), { char: t, numbers: o };
                })(e),
                r = (function (e) {
                    return (function (e) {
                        var t, o, c;
                        if (7 === (null == (t = e.numbers) ? void 0 : t.length)) c = G;
                        else {
                            if (8 !== (null == (o = e.numbers) ? void 0 : o.length)) throw new Error("a Plate must be 7 or 8 digits long");
                            c = U;
                        }
                        return c;
                    })(e)(e);
                })(n);
            return {
                info: r,
                isValid:
                    ((t = r),
                    (o = n.numbers),
                    (c = o),
                    !(
                        isNaN(+c) ||
                        !c
                            .split("")
                            .slice(0, -1)
                            .every(function (e) {
                                return 0 != +e;
                            }) ||
                        !("Car" !== t.type || (null != t && t.category)) ||
                        null == t ||
                        !t.province
                    )),
            };
        }),
        (e.SortText = function (e) {
            if ("string" != typeof e && !Array.isArray(e)) throw new TypeError("PersianTools: SortText - The input must be string or an array of strings");
            var t = "string" == typeof e ? e.split(" ") : e;
            return (
                t.sort(function (e, t) {
                    return e.localeCompare(t, "fa", { ignorePunctuation: !0 });
                }),
                t
            );
        }),
        (e.URLfix = function (e) {
            if (e) {
                for (var t = ""; t !== e; ) (t = e), (e = e.replace(/(http\S+?)%20/g, "$1‌‌‌_‌‌‌"));
                return (e = e.replace(/(http\S+)/g, function (e, t) {
                    return decodeURI(t);
                })).replace(/\u200c\u200c\u200c_\u200c\u200c\u200c/g, "%20");
            }
        }),
        (e.acceptableKeywords = j),
        (e.addCommas = m),
        (e.addOrdinalSuffix = P),
        (e.cardNumberRegex = O),
        (e.digitsArToEn = function (e) {
            if ("string" != typeof e) throw TypeError("PersianTools: digitsArToEn - The input must be string");
            return String(e).replace(a, function (e) {
                return "" + c.indexOf(e);
            });
        }),
        (e.digitsArToFa = function (e) {
            if ("string" != typeof e) throw TypeError("PersianTools: digitsArToFa - The input must be string");
            return String(e).replace(a, function (e) {
                return o[c.indexOf(e)];
            });
        }),
        (e.digitsEnToAr = i),
        (e.digitsEnToFa = d),
        (e.digitsFaToAr = function (e) {
            if ("string" != typeof e) throw TypeError("PersianTools: digitsFaToAr - The input must be string");
            return String(e).replace(r, function (e) {
                return c[o.indexOf(e)];
            });
        }),
        (e.digitsFaToEn = p),
        (e.extractCardNumber = function (e, t) {
            if ((void 0 === t && (t = { checkValidation: !0, detectBankNumber: !1, filterValidCardNumbers: !0 }), e && O.test(e))) {
                var o,
                    c = e.match(O),
                    n =
                        null == c
                            ? void 0
                            : c.map(function (e, o) {
                                  var c = j.test(e) ? e.replace(j, "") : e,
                                      n = { index: o + 1, base: e, pure: (c = l(c) ? p(c) : c) };
                                  if ((t.checkValidation && (n.isValid = x(Number(c))), t.detectBankNumber)) {
                                      var r = D(c);
                                      (r || null === r) && (n.bankName = r);
                                  }
                                  return n;
                              });
                return (
                    t.filterValidCardNumbers &&
                        t.checkValidation &&
                        (n =
                            null == (o = n)
                                ? void 0
                                : o.filter(function (e) {
                                      return e.isValid;
                                  })),
                    n
                );
            }
            return [];
        }),
        (e.getBankNameFromCardNumber = D),
        (e.getPlaceByIranNationalId = function (e) {
            if (e) {
                if (e && 10 === e.length) {
                    var t = e.toString().substring(0, 3),
                        o = E.filter(function (e) {
                            return e.code.toString().includes(t);
                        });
                    if (o.length) {
                        var c = M.filter(function (e) {
                                return e.code === o[0].parentCode;
                            }),
                            n = o[0].code.toString();
                        return { city: o[0].city, province: c.length ? c[0].city : "unknown", codes: n.includes("-") ? n.split("-") : [n] };
                    }
                    return null;
                }
                return null;
            }
        }),
        (e.getShebaInfo = function (e) {
            var t;
            if (!q(e)) return null;
            var o = K.exec(e),
                c = null != (t = null == o ? void 0 : o[1]) ? t : "",
                n = parseInt(c, 10),
                r = z({}, L[n] || {});
            if (r.accountNumberAvailable) {
                var a = null == r.process ? void 0 : r.process(e);
                (r.accountNumber = null == a ? void 0 : a.normal), (r.formattedAccountNumber = null == a ? void 0 : a.formatted);
            }
            return delete r.process, r;
        }),
        (e.halfSpace = function (e) {
            if ("string" != typeof e) throw new TypeError("the input must be string");
            return e
                .replace(/\u00ad/g, "‌")
                .replace(/\u200C{2,}/g, "‌")
                .replace(/([۰-۹0-9إأةؤورزژاآدذ،؛,:«»\\/@#$٪×*()ـ\-=|])\u200c/g, "$1")
                .replace(/\u200c([\u064e\u0650\u064f\u064b\u064d\u064C\u0651\u06C0])/g, "$1")
                .replace(/\u200c([\w])/g, "$1")
                .replace(/([\w])\u200c/g, "$1")
                .replace(/\u200c([\n\s[].،«»:()؛؟?;$!@-=+\\])/g, "$1")
                .replace(/([\n\s[.،«»:()؛؟?;$!@\-=+\\])\u200c/g, "$1")
                .replace(/\s+\u200C|\u200C\s+/g, " ")
                .replace(/((\s|^)ن?می)\u0020/g, "$1‌")
                .replace(/((\s|^)بی)\u0020/g, "$1‌")
                .replace(/\u0020((ام|ات|اش|ای|اید|ایم|اند)\s)/g, "‌$1")
                .replace(/\u0020(ها(ی)?\s)/g, "‌$1")
                .replace(/\u0020(تر((ی)|(ین))?\s)/g, "‌$1")
                .replace(/\u0020((هایی|هایم|هایت|هایش|هایمان|هایتان|هایشان)\s)/g, "‌$1");
        }),
        (e.hasArabic = function (e) {
            return /[\u0600-\u06FF]/.test(e) && y.test(e);
        }),
        (e.hasPersian = l),
        (e.isArabic = function (e, t) {
            void 0 === t && (t = /["'-+()\s.]/g);
            var o = e.replace(t, "");
            return /^[\u0600-\u06FF\s]+$/.test(o) && y.test(o);
        }),
        (e.isPersian = C),
        (e.isShebaValid = q),
        (e.numberToWords = function (e, t) {
            var o = function () {
                return TypeError("PersianTools: numberToWords - the number must be a safe integer value");
            };
            if ("string" != typeof e && !Number.isSafeInteger(e)) return o();
            var c = Number("number" == typeof e ? e : f(e)),
                n = (null == t ? void 0 : t.ordinal) || !1,
                r = function (e) {
                    var t;
                    return null != (t = S[e]) ? t : "";
                };
            function a(e) {
                if (0 === e) return "";
                if (e <= 9) return r(e);
                if (e >= 11 && e <= 19) return r(e);
                var t = e <= 99 ? e % 10 : e % 100;
                return 0 === t ? r(e) : r(e - t) + " و " + a(t);
            }
            function d(e) {
                if (e <= 999) return a(e);
                var t = Number(e).toLocaleString().split(",");
                return t
                    .map(function (e, o) {
                        var c,
                            n = Object.freeze({ transformedVal: a(Number.parseInt(e, 10)), unitName: ((c = 3 * (t.length - (o + 1))), 0 === c ? "" : S[Number.parseInt("1" + "0".repeat(c))]) }),
                            r = n.transformedVal;
                        return r ? r + " " + n.unitName : "";
                    })
                    .filter(function (e) {
                        return e.length > 1;
                    })
                    .join(" و ")
                    .trim();
            }
            var i = Math.abs(c);
            return (function () {
                if (0 === Number(e)) return "صفر";
                if ("number" == typeof (r = c) && Number.isSafeInteger(r) && 0 !== r) {
                    var t = (function (e) {
                        return e < 0;
                    })(c)
                        ? "منفی " + d(i)
                        : d(i);
                    return n ? P(t) : t;
                }
                return o();
                var r;
            })();
        }),
        (e.phoneNumberDetail = function (e) {
            if (ie(e)) {
                var t = de(e);
                return re[t];
            }
            return null;
        }),
        (e.phoneNumberNormalizer = function (e, t) {
            if (!ie(e)) throw new Error("phone number is not valid");
            return t + e.split(/^(?:\+98|98|0098|0)/).pop();
        }),
        (e.phoneNumberValidator = ie),
        (e.remainingTime = function (e) {
            var t = new Date(e);
            if (isNaN(t.getDate())) throw new TypeError("PersianTools: remainingTime - The input must be a valid date");
            var o = new Date(Date.now()),
                c = Math.floor((Number(t) - Number(o)) / 1e3);
            if (Number(t) - Number(o) <= 0)
                return {
                    years: 0,
                    months: 0,
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    toString: function () {
                        return "";
                    },
                    isFinished: !0,
                };
            var n = Math.floor(c / ue);
            c %= ue;
            var r = Math.floor(c / se);
            c %= se;
            var a = Math.floor(c / Ce);
            c %= Ce;
            var i = Math.floor(c / le);
            c %= le;
            var p = Math.floor(c / 60),
                y = (c %= 60);
            return {
                years: n,
                months: r,
                days: a,
                hours: i,
                minutes: p,
                seconds: y,
                toString: function () {
                    return (function (e) {
                        var t = (function (e) {
                                return { faYears: d(e.years), faMonths: d(e.months), faDays: d(e.days), faHours: d(e.hours), faMinutes: d(e.minutes), faSeconds: d(e.seconds) };
                            })(e),
                            o = e.years * ue + e.months * se + e.days * Ce + e.hours * le + 60 * e.minutes;
                        return (
                            (o < ue ? "" : t.faYears + " سال و ") +
                            (o < se ? "" : t.faMonths + " ماه و ") +
                            (o < Ce ? "" : t.faDays + " روز و ") +
                            (o < le ? "" : t.faHours + " ساعت و ") +
                            (o < 60 ? "" : t.faMinutes + " دقیقه و ") +
                            t.faSeconds +
                            " ثانیه"
                        );
                    })({ years: n, months: r, days: a, hours: i, minutes: p, seconds: y });
                },
                isFinished: !1,
            };
        }),
        (e.removeCommas = f),
        (e.removeOrdinalSuffix = b),
        (e.shebaIso7064Mod97 = _),
        (e.shebaMapCodes = L),
        (e.shebaPattern = W),
        (e.shebaPatternCode = K),
        (e.timeAgo = function (e) {
            if ((void 0 === e && (e = ""), "string" != typeof e)) throw new TypeError("PersianTools: timeAgo - The input must be string");
            if (
                !(function (e) {
                    return Boolean(e.match(/^\d{4}\/\d{1,2}\/\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}$/));
                })(e) &&
                "" !== e
            )
                throw new TypeError("PersianTools: timeAgo - The input format must be yyyy/mm/dd hh:mm:ss");
            var t;
            t = "" === e ? ye() : pe(e);
            var o = 36e5,
                c = 24 * o,
                n = 7 * c,
                r = 30 * c,
                a = 365 * c,
                d = ye() - t;
            if (0 === d) return "اکنون";
            var i = d > 0 ? "قبل" : "بعد";
            return (d = d < 0 ? Math.abs(d) : d) < 6e4
                ? Math.round(d / 1e3) + " ثانیه " + i
                : d < o
                ? Math.round(d / 6e4) + " دقیقه " + i
                : d < c
                ? Math.round(d / o) + " ساعت " + i
                : d < n
                ? "حدود " + Math.round(d / c) + " روز " + i
                : d < r
                ? "حدود " + Math.round(d / n) + " هفته " + i
                : d < a
                ? "حدود " + Math.round(d / r) + " ماه " + i
                : "حدود " + Math.round(d / a) + " سال " + i;
        }),
        (e.toPersianChars = function (e) {
            if (e) {
                for (var t = ""; t != e; )
                    (t = e),
                        (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/\{\{(عەرەبی|بە عەرەبی|بە ئویغوری)\|(.*?)ى(.*?)\}\}/g, "{{$1|$2​​​ی​​​$3}}")).replace(/\{\{(بە سیندی)\|(.*?)ه(.*?)\}\}/g, "{{$1|$2‏‏‏ھ‏‏‏$3}}")).replace(
                            /\{\{(بە پەشتۆ)\|(.*?)ي(.*?)\}\}/g,
                            "{{$1|$2​​​ی​​​$3}}"
                        )).replace(/\[\[([^\]]*?\:[^\]]*?)ي(.*?)\]\]/g, "[[$1‏‏‏ی‏‏‏$2]]")).replace(/\[\[([^\]]*?\:[^\]]*?)ى(.*?)\]\]/g, "[[$1​​​ی​​​$2]]")).replace(/\[\[([^\]]*?\:[^\]]*?)ك(.*?)\]\]/g, "[[$1‏‏‏ک‏‏‏$2]]")).replace(
                            /\[\[([^\]]*?\:[^\]]*?)ه‌(.*?)\]\]/g,
                            "[[$1‏‏‏ە‏‏‏$2]]"
                        )).replace(/\[\[([^\]]*?\:[^\]]*?)ه(.*?)\]\]/g, "[[$1‏‏‏ھ‏‏‏$2]]"));
                for (
                    e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/ي/g, "ی")).replace(/ك/g, "ک")).replace(/ى/g, "ی")).replace(new RegExp("([^ء-يٱ-ە]|$)ه", "g"), "ە$1")).replace(/ە‌/g, "ە")).replace(
                        /\u200f\u200f\u200fی\u200f\u200f\u200f/g,
                        "ي"
                    )).replace(/\u200b\u200b\u200bی\u200b\u200b\u200b/g, "ى")).replace(/\u200f\u200f\u200fک\u200f\u200f\u200f/g, "ك")).replace(/\u200f\u200f\u200fه\u200f\u200f\u200f/g, "ه‌")).replace(
                        /\u200f\u200f\u200fھ\u200f\u200f\u200f/g,
                        "ه"
                    ),
                        t = "";
                    t != e;

                )
                    (t = e),
                        (e = (e = (e = (e = e.replace(/\[\[(پۆل|[Cc]ategory):(.*?)(ى|ي)(.*?)\]\]/g, "[[$1:$2ی$4]]")).replace(/\[\[(پۆل|[Cc]ategory):(.*?)ك(.*?)\]\]/g, "[[$1:$2ک$3]]")).replace(
                            /\[\[(پۆل|[Cc]ategory):(.*?)ه‌(.*?)\]\]/g,
                            "[[$1:$2$3ە]]"
                        )).replace(/\[\[(پۆل|[Cc]ategory):(.*?)ه(.*?)\]\]/g, "[[$1:$2ھ$3]]"));
                for (t = ""; t != e; )
                    (t = e),
                        (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/\{\{(عەرەبی|سەرەتای عەرەبی)\}\}([^\}]*)ی([^\{]*)\{\{کۆتایی\sعەرەبی\}\}/g, "{{$1}}$2ي$3{{کۆتایی عەرەبی}}")).replace(
                            /\{\{(عەرەبی|سەرەتای عەرەبی)\}\}([^\}]*)ک([^\{]*)\{\{کۆتایی\sعەرەبی\}\}/g,
                            "{{$1}}$2ك$3{{کۆتایی عەرەبی}}"
                        )).replace(/\{\{(عەرەبی|سەرەتای عەرەبی)\}\}([^\}]*)ە([^\{]*)\{\{کۆتایی\sعەرەبی\}\}/g, "{{$1}}$2ه$3{{کۆتایی عەرەبی}}")).replace(
                            /\{\{(عەرەبی|سەرەتای عەرەبی)\}\}([^\}]*)ھ([^\{]*)\{\{کۆتایی\sعەرەبی\}\}/g,
                            "{{$1}}$2ه$3{{کۆتایی عەرەبی}}"
                        )).replace(/\{\{(بە پەشتۆ)\|(.*?)ى(.*?)\}\}/g, "{{$1|$2ي$3}}")).replace(/\{\{(عەرەبی|بە عەرەبی|بە سیندی|بە ئویغوری)\|(.*?)ی(.*?)\}\}/g, "{{$1|$2ي$3}}")).replace(
                            /\{\{(عەرەبی|بە عەرەبی|بە ئویغوری)\|(.*?)ک(.*?)\}\}/g,
                            "{{$1|$2ك$3}}"
                        )).replace(/\{\{(عەرەبی|بە عەرەبی|فارسی|بە فارسی|ن.فارسی|بە پەشتۆ)\|(.*?)ە(.*?)\}\}/g, "{{$1|$2ه$3}}")).replace(/\{\{(عەرەبی|بە عەرەبی|فارسی|بە فارسی|ن.فارسی|بە پەشتۆ)\|(.*?)ھ(.*?)\}\}/g, "{{$1|$2ه$3}}"));
                return e;
            }
        }),
        (e.verifyCardNumber = x),
        (e.verifyIranianLegalId = function (e) {
            if (e) {
                if ((e = String(e)).length < 11 || 0 === parseInt(e)) return !1;
                if (0 === parseInt(e.substr(3, 6))) return !1;
                for (var t = parseInt(e.substr(10, 1)), o = parseInt(e.substr(9, 1)) + 2, c = [29, 27, 23, 19, 17], n = 0, r = 0; r < 10; r++) n += (o + parseInt(e.substr(r, 1))) * c[r % 5];
                return 10 == (n %= 11) && (n = 0), t === n;
            }
        }),
        (e.verifyIranianNationalId = function (e) {
            if (e) {
                var t = e.toString(),
                    o = t.length;
                if (t in { "0000000000": !0, 2222222222: !0, 3333333333: !0, 4444444444: !0, 5555555555: !0, 6666666666: !0, 7777777777: !0, 8888888888: !0, 9999999999: !0 }) return !1;
                if (o < 8 || o > 10) return !1;
                if (0 == +(t = ("00" + t).substring(o + 2 - 10)).substring(3, 9)) return !1;
                for (var c = +t.substring(9), n = 0, r = 0; r < 9; r++) n += +t.substring(r, r + 1) * (10 - r);
                return ((n %= 11) < 2 && c === n) || (n >= 2 && c === 11 - n);
            }
        }),
        (e.wordsToNumber = function (e, o) {
            var c = void 0 === o ? {} : o,
                n = c.digits,
                r = void 0 === n ? "en" : n,
                a = c.addCommas,
                y = void 0 !== a && a,
                u = c.fuzzy,
                s = void 0 !== u && u;
            if (!e) return "";
            (e = e.replace(new RegExp("مین$", "ig"), "")), (e = b(e));
            var C,
                l,
                f,
                k = s
                    ? (function (e, o) {
                          if (e && "string" == typeof e) {
                              var c = w;
                              return e
                                  .split(" ")
                                  .map(function (e) {
                                      return "و" === e ? e : 1 === e.length ? B[0] : t.closest(e, c);
                                  })
                                  .join(" ");
                          }
                      })(e)
                    : e,
                T =
                    ((C = (function (e) {
                        var t, o, c;
                        (t = e),
                            (o = N),
                            (c = new RegExp(Object.keys(o).join("|"), "gi")),
                            (e = t.replace(c, function (e) {
                                return o[e];
                            }));
                        var n = [];
                        return (
                            e.split(" ").forEach(function (e) {
                                return e === B[0] ? "" : n.push(e);
                            }),
                            n
                        );
                    })(k)),
                    (l = 0),
                    (f = !1),
                    C.forEach(function (e) {
                        (e = p(e)) === I[0] ? (f = !0) : null != g[e] ? (l += g[e]) : null != h[e] ? (l += h[e]) : isNaN(Number(e)) ? (0 === l ? (l = v[e]) : (l *= v[e])) : (l += parseInt(e, 10));
                    }),
                    f ? -1 * l : l),
                $ = y ? m(T) : T;
            return "fa" === r ? d($) : "ar" === r ? i($) : $;
        });
});
//# sourceMappingURL=persian-tools.umd.js.map
