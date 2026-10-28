/* ==========================================================
 * quiz-data.js — クイズデータ（quiz.html と同じフォルダに置く）
 *
 * テーマ = { id, title, description, image, questions: [...] }
 * 問題タイプと必要なキー:
 *   slide        title, content(HTML可), image
 *   single       question, options[{text,image}], answer(文字列)
 *   binary       question, options[文字列2つ], answer, image
 *   bible-first  bibleText, question, options[], answer, image
 *   multiple     question, options[{text,image}], answer(配列)
 *   classify     question, categories[], items[{id,text,category}]
 *   sort         question, items[{id,text}], correctOrder[id...]
 *   puzzle       question, imageUrl
 * 共通: badge(バッジ表示), explanation(解説)
 * 画像の https://placehold.co/... は仮URLです。差し替えてください。
 * ========================================================== */
/* クイズテーマデータ集 */
const quizThemes = [
   {
      id: "lesson16",
      title: "イエスは ちじょうで どんなことをした？",
      description: "「いつまでも しあわせに くらせます」レッスン１６の クイズだよ",
      image: "https://cms-imgp.jw-cdn.org/img/p/1102021216/J/art/1102021216_J_cnt_01_lg.jpg",
      questions: [
         {
            "type": "slide",
            "badge": "📚 がくしゅうスライド",
            "title": "イエス・キリストの ちじょうでの あゆみ",
            "content": "イエスは ちじょうに いた とき、かみの おうこくの よい しらせを つたえ、たくさんの びょうきの ひとを なおす きせきを おこないました。\n\nまた、でしたちや こどもたちに しんせつにし、あいの てほんを しめして くれました。\n\nみゆちゃんは イエスが どんな ひとだったか しっている？",
            "image": "https://cms-imgp.jw-cdn.org/img/p/502018118/univ/art/502018118_univ_lsr_lg.jpg"
         },
         {
            "type": "single",
            "badge": "だい1もん",
            "question": "イエスは ちじょうで なにを していた？",
            "options": [
               { "text": "おいしゃさん", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNqU4HupZ6t7dYlYRKvSPOspXwWrOL1hdKGgow3K_pvlyxqTbZAl73HYC7E8PWfSbnQiwa9MI3LJxZ5wrQnphziufST3OU51VrTHEQnEri9yXwFusorJr9ovogoN9oJUaI0gGnc31AxS3P/s400/medical_nyuin_doctor_man.png" },
               { "text": "かみの おうこくの よい しらせを つたえた", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjGbrorrfIKTJ-GzLP_hd0YElUPSaUxjuoSYW70aEjVsC0MUePluT-RdMt7ED5XKYjc2-u1WCAza_0FPvuNmycAjaWmV1dDwztVrUyDb8hZr5xLJ6Ux82XDbkAV-dXleavQa7azueVNUM2/s800/presentation_setsumei_man.png" },
               { "text": "くるまの うんてん", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiHI59-eQIPditx8jvP8zMMyFJoaoPEAHVpKYcmfQTDZS2Nr-wL3ac4JnBkJ1rtj02rexEzolZnWsD8Ap1ybLS4OYdYPB3WNsjjWPHIQiiNmOwiF2diE8eG_pkhYRM5QCG9y43CxQ3028/s400/taxi_driver_untensyu3.png" },
               { "text": "さかなを とる", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqgYlZg9hDmCYasDNFhgIM1bqLhnOElLJgFRMUkJGyrmwR9GS6s-Y8yp7ZKslJK65WLVb8C6vQsUyan42vqxJY6WwZvTf6RCZutPNrED2HJ1FsFFmopr7qowjpc9IiN1M2iUjOiJfKMh1C/s800/job_gyogyou_ryoushi.png" }
            ],
            "answer": "かみの おうこくの よい しらせを つたえた",
            "explanation": "イエスは「かみの おうこくに ついての よい しらせ」を つたえる ことを いちばん たいせつに していました。"
         },
         {
            "type": "single",
            "badge": "だい2もん",
            "question": "イエスは なにを コントロールする きせきを おこなった？",
            "options": [
               { "text": "しぜん（かぜや うみ）", "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
               { "text": "ロケット", "image": "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=400&q=80" },
               { "text": "じどうしゃ", "image": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80" },
               { "text": "スマホ", "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80" }
            ],
            "answer": "しぜん（かぜや うみ）",
            "explanation": "せいかい！ イエスは つよい かぜや あらい うみも しずめる ことが できました。（マタイ 8:23-27）"
         },
         {
            "type": "multiple",
            "badge": "だい3もん（ふくすう せんたく）",
            "question": "イエスの きせきから なにが わかるかな？（あてはまるものを えらぼう）",
            "options": [
               { "text": "イエスは エホバから つかわされた", "image": "https://cms-imgp.jw-cdn.org/img/p/2026523/univ/art/2026523_univ_cnt_1_xl.jpg" },
               { "text": "あらしと おはなしできる", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWJu0T6R-qnhzx0AF1tf8egPbUuh1m2sxWDI6UpU22ZiydNSQo2_Q3hK3gSW2CoHIfQ0J1GrG0LVBR0Jgt8PUmMZ0Yz76JH-DQFCmwf7c8IAMA5oVnZ2Naex10IQb5Iw15QqeF2dLTt7Gg/s500/arashi.png" },
               { "text": "パンは おいしい", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg25JicWql0BeKQwPegUTbApgHtRR7zFFum20Zed1jxKdokrJoMESQ96j2CT5OzhiHi2U5LHSegsDz4CrMT9Y9clPpi7H2I5k7FNuShdg0iCNXWz-LqhccVuFzPTY76gpcU3LHUD5syP5NC/s400/pan_bread_set.png" },
               { "text": "エホバが もんだいを かいけつしてくれる", "image": "https://cms-imgp.jw-cdn.org/img/p/2016403/univ/art/2016403_univ_lsr_lg.jpg" }
            ],
            "answer": [
               "イエスは エホバから つかわされた",
               "エホバが もんだいを かいけつしてくれる"
            ],
            "explanation": "イエスが おこなった きせきを しらべると、エホバが にんげんに してあげたい ことが わかるね！"
         },
         {
            "type": "binary",
            "badge": "だい4もん",
            "question": "イエスは「かみの おうこくの よい しらせ」を つたえるのを じゃまされたとき、やめちゃった？ ⭕か ❌か？",
            "image": "https://cms-imgp.jw-cdn.org/img/p/2026684/univ/art/2026684_univ_cnt_2_lg.jpg",
            "options": ["⭕ ほんとう（○）", "❌ ちがう（✕）"],
            "answer": "❌ ちがう（✕）",
            "explanation": "せいかいは ❌！ いじわるを されても エホバから いわれた とおりにし、さいごまで やめませんでした。"
         },
         {
            "type": "bible-first",
            "badge": "だい5もん",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102021216/univ/art/1102021216_univ_cnt_03_lg.jpg",
            "bibleText": "「イエスは まちから まちへ，むらから むらへと たびをし，かみの おうこくの よい しらせを ひろめた」（ルカ 1:8）",
            "question": "イエスは「かみの おうこくの よい しらせ」を つたえるために なにを した？",
            "options": ["たくさん たべた", "たくさん ほんを かいた", "たくさん あるいた", "たくさん ねた"],
            "answer": "たくさん あるいた",
            "explanation": "せいかい！ イエスは たくさんの ひとに あうために、じぶんから ひとびとの ところへ あるいて いきました。"
         },
         {
            "type": "classify",
            "badge": "だい6もん",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102021216/univ/art/1102021216_univ_cnt_04_lg.jpg",
            "question": "マタイ 6：14，34と7：12をよんで、イエスが「おしえた こと」と「おしえていない こと」に わけてみよう！",
            "categories": ["おしえた こと", "おしえていない こと"],
            "items": [
               { "id": "c1", "text": "ひとを ゆるすなら、じぶんも ゆるしてもらえる", "category": "おしえた こと" },
               { "id": "c2", "text": "あしたの ことを しんぱいしない", "category": "おしえた こと" },
               { "id": "c3", "text": "ねたい ときに ねればいい にんげんだもの", "category": "おしえていない こと" },
               { "id": "c4", "text": "じぶんが してほしい ことは、ひとにも してあげよう", "category": "おしえた こと" }
            ],
            "explanation": "すごい！ イエスが おしえていた ことは、エホバが みんなに しってほしいと おもっている ことだよ！"
         },
         {
            "type": "slide",
            "badge": "📚 がくしゅうスライド",
            "title": "どうがを みて クイズに こたえよう",
            "content": "イエスは エホバから ちからを もらって，たくさんの きせきを おこないました。\n\n▶ <a href='https://www.jw.org/ja/%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%83%BC/%E3%83%93%E3%83%87%E3%82%AA/#ja/mediaitems/SeriesLFFVideos/pub-lffv_161_VIDEO' target='_blank' style='color:#0284c7; font-weight:bold;'>【どうが】びょうきの おんなのひとが いやされる</a> を みてみよう！",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102021216/univ/art/1102021216_univ_cnt_06_xl.jpg"
         },
         {
            "type": "single",
            "badge": "だい7もん",
            "question": "おんなのひとは どんな びょうきだった？",
            "options": [
               { "text": "はなみずが とまらない びょうき", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSrSEBBYe37bM-F8BnvZVdnGkoFehVIFY4wiVwteK14Egps1aQR5poIbXfPS2IRloQVNii7RMN3QZ0NpJleFkLYq0AuXBEX8aMP-UR67a-U7ySC2yTJRvlFlrn_KTlL0jNyol6fyP4DWm5/s400/hanadumari_woman.png" },
               { "text": "ねむれない びょうき", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpklE9mfu57YZ7PyYcppg9XSpqOxyJYxPjLbf5Cj-QdoZ52G4dDeCioArypNUWp3vueXc4EFE3BAvD7DvvfJdsrnn60vQ2-jDWWNv_sKqXvzL_Gas5Na8vfLRuhK5rfV7hLWAAt8pHdjpM/s400/sleep_nemurenai_woman.png" },
               { "text": "めが みえない びょうき", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY4zV21iho2RLuSwo-_XostdEA77gKzbsrBh_ps__OLZcuD4U99YPd2xHDqyve0HLj9KQ1kyGa_BYGKtSevNjaRCYADzmXCPub_hOu1QQsJLikq-wmjH2ojRIRIcZ-XH5hs-fif7JUZab6/s400/eye_hakunaisyou_ryokunaisyou.png" },
               { "text": "ちが とまらない びょうき", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGvw_TkOV2uIGUSNy8Pj4qAQevyIcd61vjnSJei_s2Vc6Cr0kBGmaAaM85rhu18ZyhG647O9NlpDBlfooGk1wpc0DTlWfjEgl0C1u1riQlfNJAYzUdX29WS0XrgSM7kbs_Pw-IFOIWskZp/s400/medical_ketsueki.png" }
            ],
            "answer": "ちが とまらない びょうき",
            "explanation": "せいかい！ おんなのひとは ながねん「ちが とまらない びょうき」で くるしんでいましたが、イエスに たすけてもらいました。"
         },
         {
            "type": "sort",
            "badge": "だい8もん",
            "question": "おんなのひとは どんなことをした？ じゅんばんに ならびかえよう！",
            "items": [
               { "id": "s1", "text": "イエスを さがした" },
               { "id": "s2", "text": "イエスに ちかづいた" },
               { "id": "s3", "text": "イエスに さわった" },
               { "id": "s4", "text": "イエスに あやまった" }
            ],
            "correctOrder": ["s1", "s2", "s3", "s4"],
            "explanation": "せいかい！ おんなのひとは イエスを さがし、ちかづき、ふくに さわり、さいごに あやまりました。イエスは とても やさしく してくれたね。"
         },
         {
            "type": "slide",
            "badge": "📚 ふくしゅうスライド",
            "title": "クイズを ふりかえって かんがえよう",
            "content": "・みゆちゃんは イエスの どんなところが すきに なりましたか？\n\nイエスとエホバはどんなところが似ていますか？",
            "image": "https://cms-imgp.jw-cdn.org/img/p/502012496/univ/art/502012496_univ_lsr_lg.jpg"
         },
         {
            "type": "puzzle",
            "badge": "🧩 さいごの パズル",
            "question": "イエスが みんなに「かみの おうこくの よい しらせ」を はなしている ばめんの パズルを かんせいさせよう！",
            "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/2014723/univ/art/2014723_univ_lsr_xl.jpg",
            "explanation": "この ちょうしで せいしょの レッスンを つづけていこうね！"
         }
      ]
   },
   {
      id: "lesson17",
      title: "イエスは どんなひと？",
      description: "「いつまでも しあわせに くらせます」レッスン１７の クイズだよ",
      image: "https://cms-imgp.jw-cdn.org/img/p/1102021217/J/art/1102021217_J_cnt_01_lg.jpg",
      questions: [
         {
            "type": "slide",
            "badge": "📚 がくしゅうスライド",
            "title": "イエス・キリストの ちじょうでの あゆみ",
            "content": "イエスは どんなひと だったかな？\nイエスのことを たくさんしると、もっとイエスとエホバを すきになるよ。\nみゆちゃんは イエスのどんなところを まねしたい？",
            "image": "https://cms-imgp.jw-cdn.org/img/p/2026686/univ/art/2026686_univ_cnt_1_lg.jpg"
         },
         {
            "type": "single",
            "badge": "だい1もん",
            "question": "イエスと エホバは どんなところが にている？",
            "options": [
               { "text": "ひげ", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWj37JLhskKVoCKKK6SHH57nC9D6aiZB12B4LgEGCmmGuYIzkiwFhj7k8afiJIKGeTFZKeb7YzHv9pk2TvxSH4Niee22Fx3xk_DKxg4vs5llKjScTREP1xuUoUrP01IekiK6Etm-sPQNpJ/s400/hige_kirei.png" },
               { "text": "おおきさ", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiee3vhacyNMc9ehwDC8C9umyT3EmclyK4_VQgraCNIZD9RVxPkhZC-kn3CeVugZqYmcyWEIG7eJraHwdQbdi6d1MaFlUtdMuDRv4VFm2DlfWmdOp8OmeS-zLXGJGPsCtuP2h3H8AqmOKL8/s400/donguri_seikurabe.png" },
               { "text": "かお", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwfe-2AGbz1RROFZ1Ji84f3GsYlHwce_lK8RAZybwWfLVNknerYhJTpU2ARp35zkO6NoyhSxmEP-4cTV8bgo8huH6gXR7dWco6wFPOWl5O5sdhKt00bpttadBjO-U8TKtmHg3roMsMuzr0/s800/doppelganger.png" },
               { "text": "せいかく", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi74alfWuh246QoO4_YSvG_DT0wbFkeRrp4qwgUPtbM-qT4XL6JS1S4lr2N8r2pQ4KqWINXjd2m8MP4RQRYgyGYu2KxcbfBAEqtIVurozvA_xDcx8agjSic3v__afeITqotx4gatmhUJwFs/s300/hyoujou_text_man_nikoniko.png" }
            ],
            "answer": "せいかく",
            "explanation": "イエスと エホバは せいかくが そっくり！ イエスをしると エホバのことを もっとすきになるよ"
         },
         {
            "type": "multiple",
            "badge": "だい2もん",
            "question": "イエスが エホバを あいていることは どうしてわかる？（あてはまるものを えらぼう）",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102016088/univ/art/1102016088_univ_lsr_lg.jpg",
            "options": [
               { "text": "エホバに\nいつもしたがった" },
               { "text": "エホバのことを\nひとにはなした" },
               { "text": "エホバと\nなかよくなれないように\nじゃました" },
               { "text": "エホバと\nなかよくなれるように\nひとをたすけた" }
            ],
            "answer": [
               "エホバに\nいつもしたがった",
               "エホバのことを\nひとにはなした",
               "エホバと\nなかよくなれるように\nひとをたすけた"
            ],
            "explanation": "イエスは エホバを あいしていたから、エホバの いうことを よくきいたよ。 そして、エホバが すてきなかみだと ひとびとに しらせたよ。"
         },
         {
            "type": "multiple",
            "badge": "だい3もん（ふくすう せんたく）",
            "question": "イエスが みゆちゃんのことを あいしていると どうしてわかる？（あてはまるものを ぜんぶえらぼう）",
            "options": [
               { "text": "みゆちゃんが にんげんだから", "image": "https://cms-imgp.jw-cdn.org/img/p/1102016091/univ/art/1102016091_univ_cnt_2_md.jpg" },
               { "text": "イエスが おねがいしたことを みゆちゃんが やっているから", "image": "https://cms-imgp.jw-cdn.org/img/p/1102012151/univ/art/1102012151_univ_cnt_1_xl.jpg" },
               { "text": "イエスは みゆちゃんのために 死（し）んだから", "image": "https://cms-imgp.jw-cdn.org/img/p/1102016100/univ/art/1102016100_univ_lsr_lg.jpg" },
               { "text": "みゆちゃんが エホバをしるように たすけているから", "image": "https://cms-imgp.jw-cdn.org/img/p/2016403/univ/art/2016403_univ_lsr_lg.jpg" }
            ],
            "answer": [
               "みゆちゃんが にんげんだから",
               "イエスが おねがいしたことを みゆちゃんが やっているから",
               "イエスは みゆちゃんのために 死（し）んだから",
               "みゆちゃんが エホバをしるように たすけているから"
            ],
            "explanation": "イエスは みゆちゃんのことが ほんとうにだいすきで、たくさんのことをしてくれたよ。イエスについてもっとしろう！"
         },
         {
            "type": "puzzle",
            "badge": "だい４もん 🧩 きゅうけい パズル",
            "question": "イエスが パンを あたえている ばめんの パズルを かんせいさせよう！",
            "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/1102021217/univ/art/1102021217_univ_cnt_04_xl.jpg",
            "explanation": "レッスンをがんばっていこう！あともうちょっとだよ！"
         },
         {
            "type": "binary",
            "badge": "だい５もん",
            "question": "まず使徒（しと）20:35をよんでね。イエスは ひとから もらうほうが しあわせと おしえた？ ⭕か ❌か？",
            "image": "https://cms-imgp.jw-cdn.org/img/p/502019175/univ/art/502019175_univ_lsr_lg.jpg",
            "options": ["⭕ ほんとう（○）", "❌ ちがう（✕）"],
            "answer": "❌ ちがう（✕）",
            "explanation": "イエスは おかねや ものを あまりもっていなかったけど、きまえよく ひとに あたえました。"
         },
         {
            "type": "slide",
            "badge": "📚 がくしゅうスライド",
            "title": "どうがを みて クイズに こたえよう",
            "content": "▶ <a href='https://www.jw.org/ja/%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%83%BC/%E3%83%93%E3%83%87%E3%82%AA/#ja/mediaitems/SeriesLFFVideos/pub-lffv_171_VIDEO'>【どうが】あたえるほうが こうふく</a> を みてみよう！",
            "image": "https://cms-imgp.jw-cdn.org/img/p/jwbai/201412/univ/art/jwbai_univ_201412_lss_01_lg.jpg"
         },
         {
            "type": "multiple",
            "badge": "だい６もん",
            "question": "イエスのように おかねや ものが ないとき、なにを あたえることができる？",
            "options": [
               { "text": "おてがみをかく", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvpcHJWc06O2fOJyGvDPJYaEyG_IkSVrFcwdnbTYsG1siEGQi65HQvCnAN39SBawW7NfV785Hke74Xr6wZmph9jV4qxGNwCLoqW6TYeDnWAmhNsqNJ_JnPFXHxF4mSU1Ta47q2ywY7KGA/s400/mail.png" },
               { "text": "おてつだいをする", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQ0H1D8_JnbRVeNfIhXqhMqm73tzwJYb-E5qCIUzIyoyjnkHQt_7wmJxzVtq0eHRnZGiVQpT0YPhna5abdhkfmnVdhI8tFtf378R61IOMW9187K-p6P_Q5ZvrRbqwGflnTzBvCDrurrD8/s500/family_kaji_tetsudai.png" },
               { "text": "エホバのことをはなす", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXkGXZxHE8BWUK_i3-mS0T3CdN1OQkSRVoc5yndasD3c1Xncpbh6jgAf8EJyis3tEcrBnrpsqhK9ne240vpiAigwD1NAU-2o-uFXh-BnFQ0i5zoIw2oq3hyphenhyphen8Qp84OYz7diDw2PBpZYqI4d/s400/family_smartphone_game.png" },
               { "text": "えをかいてあげる", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkkPWu6zRmA3imW4bJ2Dzs3cNBDXumZrikakhGS9YK0-r_D6cFhq0s2oTb0eGNexDku5KXcNSynoJz0vuC0Cg_4-GnoK0pe_XOx3aZmYkD6jGfYwrzrFRBVs-6esgrxYKbRiNByuXCzok/s400/father_nigaoe.png" }
            ],
            "answer": [
               "おてがみをかく",
               "おてつだいをする",
               "エホバのことをはなす",
               "えをかいてあげる"
            ],
            "explanation": "こたえは ぜんぶ！みゆちゃんは つぎのしゅうかいで だれに なにを あげたい？"
         },
         {
            "type": "classify",
            "badge": "だい７もん",
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNJvVyAr3J4_KxRLPOWewnU6AztHGMAGbk8ZytvKhQADnWU8YXo8bj-GOb8nl8fdORzYjxs7kQ74kHlC_cNskMzfjopnpDtKEj19Qb0w5lgTwOtJW4suFdPe8ErxBVDgp1s-L7oxfIVchB/s450/saigai_mochidashi_bag_kakunin.png",
            "question": "みゆちゃんが もっているものと もっていないものを かんがえよう！",
            "categories": ["もっている", "もっていない"],
            "items": [
               { "id": "c1", "text": "シール", "category": "もっている" },
               { "id": "c2", "text": "えんぴつ", "category": "もっている" },
               { "id": "c3", "text": "パズル", "category": "もっている" },
               { "id": "c4", "text": "おかね", "category": "もっていない" },
               { "id": "c5", "text": "おてがみ", "category": "もっている" },
               { "id": "c6", "text": "おにんぎょう", "category": "もっている" },
               { "id": "c7", "text": "エホバのちしき", "category": "もっている" }
            ],
            "explanation": "みゆちゃんは なにを だれに あたえたいとおもう？ほかにも あたえられるものは ある？"
         },
         {
            "type": "slide",
            "badge": "📚 ふくしゅうスライド",
            "title": "クイズを ふりかえって かんがえよう",
            "content": "・イエスは エホバを あいしていて、ひとも あいしているよ。\n\n・イエスの どんなところが すき？",
            "image": "https://cms-imgp.jw-cdn.org/img/p/502012496/univ/art/502012496_univ_lsr_lg.jpg"
         }
      ]
   },
   {
      id: "lesson18",
      title: "ほんものの クリスチャンは どんなひとたち？",
      description: "「いつまでも しあわせに くらせます」レッスン１８の クイズだよ",
      image: "https://cms-imgp.jw-cdn.org/img/p/1102021218/J/art/1102021218_J_cnt_01_lg.jpg",
      questions: [
         // --- セクション1：ほんもののクリスチャンは聖書のおしえにしたがっている（クイズ1〜3） ---
         {
            "type": "slide",
            "badge": "📚 がくしゅうスライド（セクション1）",
            "title": "聖書のおしえにしたがう",
            "content": "ほんものの クリスチャンは、じぶんの 考えではなく、聖書の おしえを いちばん 大切に してしたがいます。\n\n▶ 聖書を ひらいて、神の 言葉を よく読んでみましょう！",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102021218/univ/art/1102021218_univ_cnt_02_xl.jpg"
         },
         {
            "type": "binary",
            "badge": "だい1もん",
            "question": "ほんものの クリスチャンは、じぶんの 好きなように 生きて よい？ ⭕か ❌か？",
            "image": "https://cms-imgp.jw-cdn.org/img/p/502013282/univ/art/502013282_univ_lsr_lg.jpg",
            "options": ["⭕ ほんとう（○）", "❌ ちがう（✕）"],
            "answer": "❌ ちがう（✕）",
            "explanation": "聖書の おしえや ルールを 大切にして、神に したがうのが ほんものの クリスチャンです。"
         },
         {
            "type": "single",
            "badge": "だい2もん",
            "question": "イエスや ほんものの クリスチャンが いつも お手本に しているものは なんですか？",
            "options": [
               { "text": "じぶんの 思いつき", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjf56lPbdkfbFwEDUyPQMLnb6-Q-go7qjrpyHrw6ZwxLwZvRAjFcQPU1-lyLSOBLHoDA22HXvBvHuPLSOHcwklv73yJDtMLNhCSFZmQkkhBbU4TvsZnkQ6W7bb3fgjUpliZKOX1Njn9YLkR/s450/denkyuu_on.png" },
               { "text": "まわりの 人の 意見", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdA89N1YhfDcFO97dhB8T4gTRlRC5iD_IbSYfFk_EQ2PXqXLI87DcWQbWO19wdfumROVKTooZHuUICdGCgahrnE_gwv-y7Ce2VKNnh4tqTqNG8YznE2g5H4dG9neD5n1DYScDAqkKbN_U/s550/internet_influencer_figure.png" },
               { "text": "聖書の 真理（神の 言葉）", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlSMxSvUZIqu74PCvdrYD7K7PWSp0TJol2ZMUAHwbX8lW4LfymjzUmpjVevzfzlT6LQPrtr-fjFXDg61fKgCDdVNwFCnYp7mjFgbvqTR0-PrKeJahiAyAEo85mYP6dtStO2BLNltR6LUla/s400/jisyo_jiten_boy.png" },
               { "text": "流行の 本や テレビ", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgw8BFHgmrsXsiQ_57SHlTm0wxrJe7EzJjUpAWpCxsugS5yCkMZPUhCx_a2sLSVJL1_vH3T258oiLivTeN6DEuBvre5H_ue6QNvskcJO13FCZ9r_bN3ySIB1NUP9cp8MwSES1NnxMfMzBOQ/s400/tv_boy_chikaku.png" }
            ],
            "answer": "聖書の 真理（神の 言葉）",
            "explanation": "聖書こそが、私たちが どう歩むべきかを 教えてくれる 大切な 道しるべです。"
         },
         {
            "type": "single",
            "badge": "だい3もん（生活への当てはめ）",
            "question": "おうちで こまったときや どうしようか迷ったとき、聖書の おしえを どうやって 生活に あてはめられるかな？",
            "options": [
               { "text": "聖書を ひらいて、イエスなら どうするかを 考えて 従う", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivAqCn0d0DKBlrSajYyadGDa0nyf4E4YA_HN_SO9CvEkh827z-sISPS9Ha41RosGE2GdfGL5Bb_-NABKnZmK01qnB0sjydGzI-vArulogEqqBw0Y88qSySxBuG590LLzMdtzDKXGdJC9au/s400/book_tsubuse_woman.png" },
               { "text": "だまって いやなことを 我慢する", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidcXMGjyz8KTKTLmsyQBr_owBv2j-c5QP0NESYjocwbfpuwbGrLoZGStRSZLpEHg9n_ed-tWLXk65c-cGWxnaUvN6vGIDhkdxEKFs6JCqmT4glsIWZPvwtU6kJ_x9dn8FcOUhQv39rlas/s400/pose_namida_koraeru_woman.png" },
               { "text": "すきな おもちゃで あそんで わすれる", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtTt_TwY1G9vmFllyb2P1HJG8bupntrmiVpvIlc1o_I0nc6mdC2a3Tq6LXBxOzawQfmzoL79ELuSPWwUaWRxyP-yKoNcareCxZu982NigKGBA4bUJ4CCEtr8gSrLPJEj5ZkLuFKFKRgOY/s400/toy_tsumiki_girl.png" },
               { "text": "ねむってしまう", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvW0Yb-hhPbjJO6OCN3ALdDns0cdG1JAU_C1Ibb-iuuPVBjHxz6uHFeXgaR5CrZuxY2cfbQEka-FVuWfIBexjtkJcwz0rMFno6MwkUoHkpolqN28s8_9jiQOrHVvKM9M5Hw5oLuijqKf9h/s400/ninpu_pose_sims.png" }
            ],
            "answer": "聖書を ひらいて、イエスなら どうするかを 考えて 従う",
            "explanation": "聖書の おしえを 日々の生活の 中で 思い出し、そのとおりに 行動することが 大切です。"
         },

         // --- セクション2：ほんもののクリスチャンは互いを愛する（クイズ4〜6） ---
         {
            "type": "bible-first",
            "badge": "📚 がくしゅうスライド（セクション2）",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102021218/univ/art/1102021218_univ_cnt_06_lg.jpg",
            "bibleText": "「みんなが おたがいを あいしあって いれば、すべての ひとが、あなたたちは イエスの でしだと わかります」（ヨハネ 13:35）",
            "question": "▶ 上の 聖句を ひらいて よく読んでみましょう。イエスの でしにとって いちばん 大切な 特徴は なんですか？",
            "options": ["いじわるすること", "愛し合うこと", "しらんぷりすること", "おこること"],
            "answer": "愛し合うこと",
            "explanation": "イエスの でしたちは、いつも 心を こめて おたがいを 大切にしています。"
         },
         {
            "type": "classify",
            "badge": "だい4もん",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102021218/univ/art/1102021218_univ_cnt_04_lg.jpg",
            "question": "エホバと イエスが よろこぶ「愛のある 行動」と「そうでないもの」を 分けてみましょう！",
            "categories": ["すること", "しないこと"],
            "items": [
               { "id": "c1", "text": "ひとを 愛する", "category": "すること" },
               { "id": "c2", "text": "おともだちに いじわるを する", "category": "しないこと" },
               { "id": "c3", "text": "おたがいを たすけあう", "category": "すること" },
               { "id": "c4", "text": "こまっているひとを むしする", "category": "しないこと" }
            ],
            "explanation": "聖書の おしえどおりに 愛の 実践を する 人は、エホバに 心から よろこばれます。"
         },
         {
            "type": "multiple",
            "badge": "だい5もん（ふくすう せんたく）",
            "question": "家族や お友達に「愛」を 示す 方法として、聖書の おしえに あてはまるものは どれですか？（すべて えらぼう）",
            "options": [
               { "text": "にっこり えがおで あいさつする", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi74alfWuh246QoO4_YSvG_DT0wbFkeRrp4qwgUPtbM-qT4XL6JS1S4lr2N8r2pQ4KqWINXjd2m8MP4RQRYgyGYu2KxcbfBAEqtIVurozvA_xDcx8agjSic3v__afeITqotx4gatmhUJwFs/s300/hyoujou_text_man_nikoniko.png" },
               { "text": "おもちゃを やさしく かしてあげる", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoPqKJA9zk4AUoyQSxCZAjUVBzC2N2VhyVSUvGxX5gxA1evhoe0APKlnsKOsNScKz7zU2RRM8_56tJoJUu8JbDKPZdndCQliU2B4zFfld9pUmv-HgppG-6K5tzhHkNZcGtaX0SEy8V4QE5/s800/goods_koukan.png" },
               { "text": "いやな ことばを 言う", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqoJ_8Po9ZgUQpb5Jj5bLOvKz5KuF-4n3ZoUTCq46p9qdAyyTOU_xpIcja2bIWdE-SFzgGckZfg85_RyQEB8EWvg8SKLLcl54XhFxqT7H2i0f9yYyVtxDkWYQZpprdktNYM5JMsU199n4x/s800/kotoba_bouryoku_business_wm.png" },
               { "text": "「ありがとう」と かんしゃを つたえる", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLcANOkVUp5LnlGuGp3D4nxJin50rFuYEXJ-ifQWCy_zeG2n7j7EA-m0ZDeH43W_XAL5oF7UvbprVHDU6WubjepM5OJKKNnNO0484L35ELgQNI2JEWmwW1BTj_C10fxlGnX3Q-RwmYJIM/s550/kinrou_katamomi.png" }
            ],
            "answer": [
               "にっこり えがおで あいさつする",
               "おもちゃを やさしく かしてあげる",
               "「ありがとう」と かんしゃを つたえる"
            ],
            "explanation": "やさしい ことばや おもいやりの ある こうどうは、イエスの おしえどおりの いきかたです。"
         },
         {
            "type": "sort",
            "badge": "だい6もん（生活への当てはめ）",
            "question": "おうちのひとや お友達に やさしい 愛を つたえる ときの じゅんばんに ならびかえよう！",
            "items": [
               { "id": "s1", "text": "どんな やさしい ことばにしようか かんがえる" },
               { "id": "s2", "text": "笑顔で てがみや 絵を かく" },
               { "id": "s3", "text": "「いつも ありがとう」と 手を そえて わたす" },
               { "id": "s4", "text": "ふたりで 心が あたたかくなる" }
            ],
            "correctOrder": ["s1", "s2", "s3", "s4"],
            "explanation": "ひびの せいかつの 中で 思いやりを 形にすると、お互いの 心が 温かくなります。"
         },

         // --- パズル（クイズ6の後：休憩要素） ---
         {
            "type": "puzzle",
            "badge": "🧩 たのしい パズル（ちゅうけい）",
            "question": "みんな  えがおで あつまっている たのしそうな パズルを かんせいさせて、少し 休もう！",
            "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/102017006/univ/art/102017006_univ_lsr_lg.jpg",
            "explanation": "パズルを クリア！ すてきな えがおが ひろがったね。つぎの セクションも がんばろう！"
         },

         // --- セクション3：ほんもののクリスチャンは聖書の真理を伝える（クイズ7〜10） ---
         {
            "type": "slide",
            "badge": "📚 がくしゅうスライド（セクション3）",
            "title": "聖書の真理（よいしらせ）を伝える",
            "content": "ほんものの 弟子たちは、エホバの 愛や 神の王国の 良い知らせを ほかの 人にも よろこんで 伝えています。\n\n▶ <a href='https://www.jw.org/ja/%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%83%BC/%E3%83%93%E3%83%87%E3%82%AA/#ja/mediaitems/SeriesLFFVideos/pub-lffv_181_VIDEO' target='_blank' style='color:#0284c7; font-weight:bold;'>【どうが】ほかの 人に つたえる よい しらせ</a> を 見てみよう！",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102021218/univ/art/1102021218_univ_cnt_03_lg.jpg"
         },
         {
            "type": "single",
            "badge": "だい7もん",
            "question": "イエスは でしたちに「すべての くにの 人を でしとしなさい」と おしえましたが、それは どんな 気持ちからですか？",
            "options": [
               { "text": "たくさん おしゃべりを したいから", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbOP42qEfDiWw-PPSAYaLmc5qUaSZR7TyclkC-7XxN5HlPpcfpNdUXbLlpjH0LdgJqcJDR6v42YjpAYo36iNJIdPh2QoKPbMbkDVC_nDhBMhYEhH0juQKMLKAlibNvhAZVutOAPDa3qDOJ/s400/osyaberi_woman2.png" },
               { "text": "おそとに でて たくさん あるきたいから", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJqSOPJ8ALl8TTh5cbOCOECtiEmdDLyTUeh2QZiXBTFtF5MxkqDWxy7CaC1I78M6ReU4mCnuchppG479B-ZGFzCS47cPDXJL8r2IaAF9viq2cIzMKGQVf5fMDiMJprXbXzMvRhyNXB1TfZ/s450/sport_walking_woman.png" },
               { "text": "人々に 神の 愛や よい しらせを 知ってほしいから", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhO2DkPuwR_DO57z2_rWboOHvYThNCPs4kj8DfVK-K7x8KB4DaOYHMjw5bwVhE4lami-oZnAOfZMF6xesTtQbR7qeOCeDHwpGamtVfcHZuE_rT1f6O6U8FxXHHBhYUI_SRK9gPa-8orhDXV/s400/kandou_book_woman_happy.png" },
               { "text": "とおくへ りょこうに いきたいから", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxOs_IbuHuyXOMcGBUZ0prJ1xAWFa9y5GbBtyHZ9qWZSyM3xt7U9OKzBO0czs4yc_A3HeHdGqlhexXaDcTFHFv80ToDeFhlFXvENqKjD9CRb6BpLlZuVvD-U1L8HDifQmTY0FpNAHwZ-PL/s600/travel_happy_family_set.png" }
            ],
            "answer": "人々に 神の 愛や よい しらせを 知ってほしいから",
            "explanation": "エホバと イエスの 深い 愛が あるからこそ、でしたちは よろこんで よい しらせを つたえています。"
         },
         {
            "type": "single",
            "badge": "だい8もん",
            "question": "ほんものの クリスチャンが 人々に つたえる「よい しらせ」とは、おもに なんですか？",
            "options": [
               { "text": "おいしい レストランの ばしょ", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_oj_TYPuyAw4xTSljsOBe4Eo4AHBfIVYSSEcbtAe8Z-e0qFSSERifRUE1uvxBI8nV3mMgMYbPe1VQ4l3tRA46v-bcLpALSlVs7ufsJAgNMUp2XGyGyYbNqvbX6JVno6n52uT-LjWo-e_F/s400/job_chef_woman.png" },
               { "text": "新しい おもちゃ", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwERFKewSPTLqqOl-xyJWvgmrABnzkCcO3NoQUU04ephMN4NN1uRNtIQEQT8nOQcsnKJ0US7kD5QmG3hsE81yJeizkEovjSdC_vDGkxd7PhZTmGchXgkdOYU7nQXoqda0bbtU5w5au56U5/s400/omochaya_man.png" },
               { "text": "神の おうこくが すばらしい みらいを もたらすという 約束", "image": "https://cms-imgp.jw-cdn.org/img/p/502012121/univ/art/502012121_univ_lsr_lg.jpg" },
               { "text": "おもしろい アニメの じかん", "image": "https://cms-imgp.jw-cdn.org/img/p/302014046/univ/art/302014046_univ_lsr_lg.jpg" }
            ],
            "answer": "神の おうこくが すばらしい みらいを もたらすという 約束",
            "explanation": "よい しらせを つたえることで、多くの 人が エホバを 知り、希望を 持つことができます。"
         },
         {
            "type": "single",
            "badge": "だい9もん",
            "question": "イエスは でしたちに、せんきょう（よい しらせを つたえること）を つづけるうえで、どんな きもちを もつように おしえましたか？",
            "options": [
               { "text": "いやいやながら 行う", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8DtRMD4pLY6IrlRGFrumB4tyWDT4HiDer_jZdNVmbXgsmc5uVZZwQpR_Tqn7tEu2QCK3TQ8kr82znpN-0BVodSiWx0HYFtJWvCw59gKfb14yyLc7d-DbwJgzVg9zB_F3DPWyAtp9-ZFO9/s250/necchusyou_face_girl4.png" },
               { "text": "よろこんで 行う", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPzd47p1iprjYC66nJ0TGc0ikDS23oOHFF-IZ3Tt4PteQGdX9E4pNObjm9Un1jOm2CSPyROIovzkktQg6ygGbijRtPMceg7PHNdY4tHr1pNk1cAKMVejP03IYr7gJoX9Qp2HrwNO5wu_q_/s400/banzai_girl.png" },
               { "text": "だまって 行う", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFVvMSdrm7TsXYSJV3ZpO0el321F1elf55GCceIKNH30bYD0lbWinm-4JA_XNG3WwFgXuudUqolQuXTldAUmaMyf4PTa9IyhGVm8EqK4vRHB3IWf55fDVhs8Er_1ulsbx_FQDJKoOPa5Li/s400/pose_silent_girl.png" },
               { "text": "わすれて 行う", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1GDwogC609fXmFky7CrbFg4chUzlDX9VdroVSeZJ8CdTiDxkejA-ulutv2mrqp9exwGkAxDFhSWob1tFlk5hnNRW08Zx5lkez02D0HRAiulFn17l5Piua7Z0IliWTbvPcQj77q1IkIclR/s400/jikan_tobu_woman.png" }
            ],
            "answer": "よろこんで 行う",
            "explanation": "エホバの 愛を ほかの 人に つたえることは、クリスチャンにとって 大きな よろこびです。"
         },
         {
            "type": "single",
            "badge": "だい10もん（生活への当てはめ）",
            "question": "まわりの お友達や 人々に、神さまの 良い知らせを どのように 分かち合うことができるかな？",
            "options": [
               { "text": "すてきな 聖書の お話を やさしい 言葉で おしえてあげる", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtv0q3c4cjU8ubJMKEcWgDsa8WX3szRXQhp5deSB23qBex8Abc4pWBhU5ed9DrLtfHRH4sB_8u4I_u9xUvpgk6bhncxovVr2QxmM4zr7_MvYlGeEez3lCxyI2cD5hkl68lvtfZU43V65r6/s300/cafe_conbini_counter_eat-in_woman.png" },
               { "text": "なにも 話さずに とおくから 見ている", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivb_I43Et4q0fbp3ciA7RuwMRGJmZyQyP59LxnSwCXISTstFuePaQCjgfB9lb5Uec47ktgn6115Cv2RoGVoIXBkwtR7UdNDKvO5wZuAP3XWn26OblvKKMDJB7H1SnnQG-4G_42HBchstaV/s400/pose_doredore_woman.png" },
               { "text": "テレビの 話だけを たくさん する", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihqEwri8KZsKlMvu1vFUh30LQEuMuMYpVeWrDXwV0AVLHO7jQ600XSOUQF76kOMgFaJ-J0AMNU6pS2ZFrMSA4Y6siHKRUKBof8g3wRtkLr_ZzGAkWfiX869NjhSDXG2gWBYJCrlmvUs0Of/s600/idol_fan_penlight_women_tv.png" },
               { "text": "じぶんの ひみつを かくす", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpR__IgPV5G0LALO2SLQ40BpEg14FLi4qeMTmo54LRMDkWy_EGCKhsInaFTcD8XmF3w7S1MesSnyvx9pdxKn1UMaf-bB5r35IU59Cdfy2liccCl_XeVaOCWV6Ykl7k6xj_gPhS-UPD5C_o/s400/genron_tousei.png" }
            ],
            "answer": "すてきな 聖書の お話を やさしい 言葉で おしえてあげる",
            "explanation": "神さまの 約束や 良い知らせを 伝えることで、ほかの 人も 一緒に 幸せに なることができます。"
         },
         {
            "type": "slide",
            "badge": "📚 ふくしゅうスライド",
            "title": "今日の まなびの まとめ",
            "content": "・ほんものの クリスチャンは 聖書の おしえに したがっています。\n\n・おたがいを 深く 愛し合っています。\n\n・神の おうこくの よい しらせを よろこんで 人々に 伝えています。\n\nエホバと イエスは、いつも あなたの 愛ある 歩みを 見ていてくださいます。",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102021218/univ/art/1102021218_univ_cnt_04_md.jpg"
         }
      ]
   },
   {
      id: "lesson19",
      title: "エホバの証人は本物のクリスチャン？",
      description: "「いつまでも しあわせに くらせます」レッスン１９の クイズだよ",
      image: "https://cms-imgp.jw-cdn.org/img/p/1102021219/J/art/1102021219_J_cnt_01_lg.jpg",
      questions: [
         // --- セクション1：ほんもののクリスチャンとは？（クイズ1〜3） ---
         {
            "type": "slide",
            "badge": "📚 がくしゅうスライド（セクション1）",
            "title": "エホバの証人は ほんものの クリスチャン？",
            "content": "ほんものの クリスチャンは、せいしょを かたく しんじ、せいしょの しんりを ほかの 人に つたえます。\n\n▶ 聖書を ひらいて、レッスン19の 内容を よく読んでみましょう！",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102021219/univ/art/1102021219_univ_cnt_02_lg.jpg"
         },
         {
            "type": "single",
            "badge": "だい1もん",
            "question": "聖書を ひらいて 読んでみましょう。ほんものの クリスチャンが 心から 信じて、ほかの 人に 伝えているものは なにかな？",
            "options": [
               { "text": "じぶんの ルール" },
               { "text": "せいしょの しんり" },
               { "text": "せんせいの メール" },
               { "text": "おともだちの ことば"}
            ],
            "answer": "せいしょの しんり",
            "explanation": "ほんものの クリスチャンは 聖書を 固く 信じ、その 真理を 大切な 土台として 心に 深く きざんでいます。"
         },
         {
            "type": "bible-first",
            "badge": "だい2もん",
            "question": "「エホバの証人」という なまえを つかっているのは どうして？",
            "options": ["エホバが そうよんだから", "みんなで きめたから", "おとうさんが きめたから", "むかしから そうだったから"],
            "answer": "エホバが そうよんだから",
            "explanation": "エホバはつかえる人たちに，「あなたたちはわたしの証人である」といいました。（イザヤ 43:10を読む）"
         },
         {
            "type": "multiple",
            "badge": "だい3もん",
            "question": "どのようにイエスの愛に倣っている？",
            "options": ["かぞくのようにかんじる", "きょうだいとよぶ", "むしする", "しまいとよぶ"],
            "answer": ["かぞくのようにかんじる", "きょうだいとよぶ", "しまいとよぶ"],
            "explanation": "世界各地の仲間が困っている時には助けるなどして，いろいろな方法で愛を示します"
         },

         // --- セクション2：イエスの愛にないよう（クイズ4〜6） ---
         {
            "type": "classify",
            "badge": "だい4もん",
            "question": "ダニエル１２：４を読んで、でてくる言葉と でてこない言葉を わけよう！",
            "categories": ["でてくる", "でてこない"],
            "items": [
               { "id": "c1", "text": "ダニエル", "category": "でてくる" },
               { "id": "c2", "text": "おわりのとき", "category": "でてくる" },
               { "id": "c3", "text": "ふういん", "category": "でてくる" },
               { "id": "c4", "text": "てがみ", "category": "でてこない" },
               { "id": "c5", "text": "ニュース", "category": "でてこない" },
               { "id": "c6", "text": "しんのちしき", "category": "でてくる" }
            ],
            "explanation": "神は自分の言葉を人が徐々に理解できるようにします"
         },
         {
            "type": "puzzle",
            "badge": "🧩 たのしい パズル（ちゅうけい）",
            "question": "なかまをたすけるパズルをやって、少し 休もう！",
            "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/1102021219/univ/art/1102021219_univ_cnt_06_xl.jpg",
            "explanation": "パズルを クリア！ すてきな えがおが ひろがったね。つぎの セクションも がんばろう！"
         },
         {
            "type": "slide",
            "badge": "📺️ビデオを見よう",
            "title": "たがいを愛する",
            "content": "<a href=\"https://www.jw.org/open?lank=pub-jwb_201707_12_VIDEO&wtlocale=J\">ハイチの兄弟たち</a>ほんものの 弟子たちは、エホバの 愛や 神の王国の 良い知らせを ほかの 人にも よろこんで 伝えています。\n\n▶ <a href='https://www.jw.org/ja/%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%83%BC/%E3%83%93%E3%83%87%E3%82%AA/#ja/mediaitems/SeriesLFFVideos/pub-lffv_181_VIDEO' target='_blank' style='color:#0284c7; font-weight:bold;'>【どうが】ほかの 人に つたえる よい しらせ</a> を 見てみよう！"
         },
         {
            "type": "slide",
            "badge": "📚 ふくしゅうスライド",
            "title": "今日の まなびの まとめ",
            "content": "・エホバの証人は本物のクリスチャン。 \n\n 世界的な家族としてエホバを崇拝し，聖書を固く信じ，エホバについての真実を伝えている。"
         }
      ]
   }
];
