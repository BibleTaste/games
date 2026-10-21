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
         {
            "type": "slide",
            "badge": "📚 がくしゅうスライド",
            "title": "イエスの たいせつな おしえ",
            "content": "イエスは、でしたちに とっても たいせつな おしえを あたえました。\n\nヨハネ 13:34，35を いっしょに よんでみましょう！\n\nイエスの ほんものの でしには、どんな とくちょうが あるでしょうか？",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102021218/univ/art/1102021218_univ_cnt_01_lg.jpg"
         },
         {
            "type": "single",
            "badge": "だい1もん",
            "question": "イエスの ほんものの でしは、なにを みると わかりますか？",
            "options": [
               { "text": "おたがいを 愛する きもち", "image": "https://cms-imgp.jw-cdn.org/img/p/1102016091/univ/art/1102016091_univ_cnt_2_md.jpg" },
               { "text": "じまんを すること", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqgYlZg9hDmCYasDNFhgIM1bqLhnOElLJgFRMUkJGyrmwR9GS6s-Y8yp7ZKslJK65WLVb8C6vQsUyan42vqxJY6WwZvTf6RCZutPNrED2HJ1FsFFmopr7qowjpc9IiN1M2iUjOiJfKMh1C/s800/job_gyogyou_ryoushi.png" },
               { "text": "いそがしく 歩くこと", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWj37JLhskKVoCKKK6SHH57nC9D6aiZB12B4LgEGCmmGuYIzkiwFhj7k8afiJIKGeTFZKeb7YzHv9pk2TvxSH4Niee22Fx3xk_DKxg4vs5llKjScTREP1xuUoUrP01IekiK6Etm-sPQNpJ/s400/hige_kirei.png" },
               { "text": "大きな こえで おしゃべりする", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvpcHJWc06O2fOJyGvDPJYaEyG_IkSVrFcwdnbTYsG1siEGQi65HQvCnAN39SBawW7NfV785Hke74Xr6wZmph9jV4qxGNwCLoqW6TYeDnWAmhNsqNJ_JnPFXHxF4mSU1Ta47q2ywY7KGA/s400/mail.png" }
            ],
            "answer": "おたがいを 愛する きもち",
            "explanation": "イエスは「おたがいに 愛し合うなら、すべての 人が あなたたちは わたしの でしだと しるのです」と おしえました。（ヨハネ 13:34，35）"
         },
         {
            "type": "binary",
            "badge": "だい2もん",
            "question": "イエスは「みんなで けんかをしなさい」と おしえた？ ⭕か ❌か？",
            "image": "https://cms-imgp.jw-cdn.org/img/p/2026523/univ/art/2026523_univ_cnt_1_xl.jpg",
            "options": ["⭕ ほんとう（○）", "❌ ちがう（✕）"],
            "answer": "❌ ちがう（✕）",
            "explanation": "イエスは けんかではなく、「おたがいを 愛し合いなさい」と あたたかく おしえました。"
         },
         {
            "type": "bible-first",
            "badge": "だい3もん",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102016088/univ/art/1102016088_univ_lsr_lg.jpg",
            "bibleText": "「みんなが おたがいを あいしあって いれば、すべての ひとが、あなたたちは イエスの でしだと わかります」（ヨハネ 13:35）",
            "question": "この せんくから、イエスの でしにとって いちばん たいせつな ことは なんだと わかりますか？",
            "options": ["愛し合うこと", "いじわるすること", "しらんぷりすること", "おこること"],
            "answer": "愛し合うこと",
            "explanation": "イエスの でしたちは、いつも 心を こめて おたがいを たいせつに しています。"
         },
         {
            "type": "multiple",
            "badge": "だい4もん（ふくすう せんたく）",
            "question": "かぞくや お友達に「愛」を しめす ほうほうとして、せいしょの おしえに あてはまるものは どれですか？（すべて えらぼう）",
            "options": [
               { "text": "にっこり えがおで あいさつする", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi74alfWuh246QoO4_YSvG_DT0wbFkeRrp4qwgUPtbM-qT4XL6JS1S4lr2N8r2pQ4KqWINXjd2m8MP4RQRYgyGYu2KxcbfBAEqtIVurozvA_xDcx8agjSic3v__afeITqotx4gatmhUJwFs/s300/hyoujou_text_man_nikoniko.png" },
               { "text": "おもちゃを やさしく かしてあげる", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkkPWu6zRmA3imW4bJ2Dzs3cNBDXumZrikakhGS9YK0-r_D6cFhq0s2oTb0eGNexDku5KXcNSynoJz0vuC0Cg_4-GnoK0pe_XOx3aZmYkD6jGfYwrzrFRBVs-6esgrxYKbRiNByuXCzok/s400/father_nigaoe.png" },
               { "text": "いやな ことばを 言う", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWJu0T6R-qnhzx0AF1tf8egPbUuh1m2sxWDI6UpU22ZiydNSQo2_Q3hK3gSW2CoHIfQ0J1GrG0LVBR0Jgt8PUmMZ0Yz76JH-DQFCmwf7c8IAMA5oVnZ2Naex10IQb5Iw15QqeF2dLTt7Gg/s500/arashi.png" },
               { "text": "「ありがとう」と かんしゃを つたえる", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQ0H1D8_JnbRVeNfIhXqhMqm73tzwJYb-E5qCIUzIyoyjnkHQt_7wmJxzVtq0eHRnZGiVQpT0YPhna5abdhkfmnVdhI8tFtf378R61IOMW9187K-p6P_Q5ZvrRbqwGflnTzBvCDrurrD8/s500/family_kaji_tetsudai.png" }
            ],
            "answer": [
               "にっこり えがおで あいさつする",
               "おもちゃを やさしく かしてあげる",
               "「ありがとう」と かんしゃを つたえる"
            ],
            "explanation": "やさしい ことばや おもいやりの ある こうどうは、イエスの おしえどおりの いきかたです。"
         },
         {
            "type": "single",
            "badge": "だい5もん",
            "question": "イエスは でしたちに「すべての くにの 人を でしとしなさい」と おしえましたが、それは どんな きもちからですか？",
            "options": [
               { "text": "人々に 神の 愛や よい しらせを 知ってほしいから", "image": "https://cms-imgp.jw-cdn.org/img/p/2016403/univ/art/2016403_univ_lsr_lg.jpg" },
               { "text": "たくさん おしゃべりを したいから", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpklE9mfu57YZ7PyYcppg9XSpqOxyJYxPjLbf5Cj-QdoZ52G4dDeCioArypNUWp3vueXc4EFE3BAvD7DvvfJdsrnn60vQ2-jDWWNv_sKqXvzL_Gas5Na8vfLRuhK5rfV7hLWAAt8pHdjpM/s400/sleep_nemurenai_woman.png" },
               { "text": "おそとに でて たくさん あるきたいから", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg25JicWql0BeKQwPegUTbApgHtRR7zFFum20Zed1jxKdokrJoMESQ96j2CT5OzhiHi2U5LHSegsDz4CrMT9Y9clPpi7H2I5k7FNuShdg0iCNXWz-LqhccVuFzPTY76gpcU3LHUD5syP5NC/s400/pan_bread_set.png" },
               { "text": "とおくへ りょこうに いきたいから", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXkGXZxHE8BWUK_i3-mS0T3CdN1OQkSRVoc5yndasD3c1Xncpbh6jgAf8EJyis3tEcrBnrpsqhK9ne240vpiAigwD1NAU-2o-uFXh-BnFQ0i5zoIw2oq3hyphenhyphen8Qp84OYz7diDw2PBpZYqI4d/s400/family_smartphone_game.png" }
            ],
            "answer": "人々に 神の 愛や よい しらせを 知ってほしいから",
            "explanation": "エホバと イエスの 深い 愛が あるからこそ、でしたちは よろこんで よい しらせを つたえています。"
         },
         {
            "type": "slide",
            "badge": "🧸 ちょっといきぬき・きゅうけい",
            "title": "ここで ちょっと ひといきしよう！",
            "content": "みゆちゃん、ここまで すごく よく がんばったね！✨\nせすじを ぴん と のばして、大きく しんこきゅうを しよう。\n\nじゅんびが できたら、つぎの もんだいに すすもうね！",
            "image": "https://cms-imgp.jw-cdn.org/img/p/502018118/univ/art/502018118_univ_lsr_lg.jpg"
         },
         {
            "type": "slide",
            "badge": "📚 がくしゅうスライド",
            "title": "よい しらせを つたえる かつどう",
            "content": "ほんものの でしたちは、神の おうこくの よい しらせを 人々に つたえています。\n\n▶ <a href='https://www.jw.org/ja/%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%83%BC/%E3%83%93%E3%83%87%E3%82%AA/#ja/mediaitems/SeriesLFFVideos/pub-lffv_181_VIDEO' target='_blank' style='color:#0284c7; font-weight:bold;'>【どうが】ほかの 人に つたえる よい しらせ</a> を 見てみよう！",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102021218/univ/art/1102021218_univ_cnt_03_lg.jpg"
         },
         {
            "type": "single",
            "badge": "だい6もん",
            "question": "ほんものの クリスチャンが 人々に つたえる「よい しらせ」とは、おもに なんですか？",
            "options": [
               { "text": "神の おうこくが すばらしい みらいを もたらすという 約束", "image": "https://cms-imgp.jw-cdn.org/img/p/2016403/univ/art/2016403_univ_lsr_lg.jpg" },
               { "text": "おいしい レストランの ばしょ", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpklE9mfu57YZ7PyYcppg9XSpqOxyJYxPjLbf5Cj-QdoZ52G4dDeCioArypNUWp3vueXc4EFE3BAvD7DvvfJdsrnn60vQ2-jDWWNv_sKqXvzL_Gas5Na8vfLRuhK5rfV7hLWAAt8pHdjpM/s400/sleep_nemurenai_woman.png" },
               { "text": "新しい おもちゃの うりあげ", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg25JicWql0BeKQwPegUTbApgHtRR7zFFum20Zed1jxKdokrJoMESQ96j2CT5OzhiHi2U5LHSegsDz4CrMT9Y9clPpi7H2I5k7FNuShdg0iCNXWz-LqhccVuFzPTY76gpcU3LHUD5syP5NC/s400/pan_bread_set.png" },
               { "text": "おもしろい アニメの じかん", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXkGXZxHE8BWUK_i3-mS0T3CdN1OQkSRVoc5yndasD3c1Xncpbh6jgAf8EJyis3tEcrBnrpsqhK9ne240vpiAigwD1NAU-2o-uFXh-BnFQ0i5zoIw2oq3hyphenhyphen8Qp84OYz7diDw2PBpZYqI4d/s400/family_smartphone_game.png" }
            ],
            "answer": "神の おうこくが すばらしい みらいを もたらすという 約束",
            "explanation": "よい しらせを つたえることで、多くの 人が エホバを 知り、希望を 持つことができます。"
         },
         {
            "type": "single",
            "badge": "だい7もん",
            "question": "イエスは でしたちに、せんきょう（よい しらせを つたえること）を つづけるうえで、どんな きもちを もつように おしえましたか？",
            "options": [
               { "text": "よろこんで 行う", "image": "https://cms-imgp.jw-cdn.org/img/p/1102016091/univ/art/1102016091_univ_cnt_2_md.jpg" },
               { "text": "いやいやながら 行う", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqgYlZg9hDmCYasDNFhgIM1bqLhnOElLJgFRMUkJGyrmwR9GS6s-Y8yp7ZKslJK65WLVb8C6vQsUyan42vqxJY6WwZvTf6RCZutPNrED2HJ1FsFFmopr7qowjpc9IiN1M2iUjOiJfKMh1C/s800/job_gyogyou_ryoushi.png" },
               { "text": "だまって 行う", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWj37JLhskKVoCKKK6SHH57nC9D6aiZB12B4LgEGCmmGuYIzkiwFhj7k8afiJIKGeTFZKeb7YzHv9pk2TvxSH4Niee22Fx3xk_DKxg4vs5llKjScTREP1xuUoUrP01IekiK6Etm-sPQNpJ/s400/hige_kirei.png" },
               { "text": "わすれて 行う", "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvpcHJWc06O2fOJyGvDPJYaEyG_IkSVrFcwdnbTYsG1siEGQi65HQvCnAN39SBawW7NfV785Hke74Xr6wZmph9jV4qxGNwCLoqW6TYeDnWAmhNsqNJ_JnPFXHxF4mSU1Ta47q2ywY7KGA/s400/mail.png" }
            ],
            "answer": "よろこんで 行う",
            "explanation": "エホバの 愛を ほかの 人に つたえることは、クリスチャンにとって 大きな よろこびです。"
         },
         {
            "type": "classify",
            "badge": "だい8もん",
            "image": "https://cms-imgp.jw-cdn.org/img/p/1102021218/univ/art/1102021218_univ_cnt_04_lg.jpg",
            "question": "エホバと イエスが よろこぶ「すること」と「しないこと」を わけてみましょう！",
            "categories": ["すること", "しないこと"],
            "items": [
               { "id": "c1", "text": "ひとを 愛する", "category": "すること" },
               { "id": "c2", "text": "よい しらせを つたえる", "category": "すること" },
               { "id": "c3", "text": "おともだちに いじわるを する", "category": "しないこと" },
               { "id": "c4", "text": "おたがいに たすけあう", "category": "すること" },
               { "id": "c5", "text": "こまっているひとを むしする", "category": "しないこと" }
            ],
            "explanation": "せいしょの おしえどおりに 愛の 実践を する 人は、エホバに 心から よろこばれます。"
         },
         {
            "type": "sort",
            "badge": "だい9もん",
            "question": "かぞくや お友達に やさしい きもちや てがみを つたえる ときの じゅんばんに ならびかえよう！",
            "items": [
               { "id": "s1", "text": "どんな やさしい ことばにしようか かんがえる" },
               { "id": "s2", "text": "笑顔で てがみや 絵を かく" },
               { "id": "s3", "text": "「いつも ありがとう」と 手を そえて わたす" },
               { "id": "s4", "text": "ふたりで 心が あたたかくなる" }
            ],
            "correctOrder": ["s1", "s2", "s3", "s4"],
            "explanation": "ひびの せいかつの なかで やさしい ことばを つかうことは、イエスの でしとしての りっぱな 歩みです。"
         },
         {
            "type": "slide",
            "badge": "📚 ふくしゅうスライド",
            "title": "今日の まなびの まとめ",
            "content": "・イエスの ほんものの でしは、おたがいを 愛し合っています。\n\n・「神の おうこくの よい しらせ」を よろこんで 人々に つたえています。\n\nエホバと イエスは、いつも あなたの 愛ある こうどうを 見ていてくださいます。",
            "image": "https://cms-imgp.jw-cdn.org/img/p/502012496/univ/art/502012496_univ_lsr_lg.jpg"
         },
         {
            "type": "puzzle",
            "badge": "🧩 さいごの パズル",
            "question": "みんなで 手を つないで えがおで あつまっている たのしそうな パズルを かんせいさせよう！",
            "imageUrl": "https://cms-imgp.jw-cdn.org/img/p/2014723/univ/art/2014723_univ_lsr_xl.jpg",
            "explanation": "クイズの クリア、おめでとうございます！ エホバと イエスの だいすきな でしとして、これからも がんばりましょう！"
         }
      ]
   }
];
