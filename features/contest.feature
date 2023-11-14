Feature: Contest

    Contest all CRUD operations

    Scenario: Studentni kontestga a'zo bo'lishi
    Given Student asosiy (Home) sahifani ochdi
    When Student contestga qantashish tugmasini
    Then Bazada contestUser collectionda yangi bo'sh dokument yaratilinishi kerak user va contestga bo'g'langan
    And Student contest haqidagi ma'lumot bilan tanishmasdan turib challengeni boshlay olmasligi kerak
    And Student contest haqidagi ma'lumot bilan tanishib chiqqandan so'ng kontestga ruxsat ochilishi kerak
    And Studentga contestga ruxsat berilgandan so'ng aynan ruxsat berilgan challenge kuniga ruxsat berish kerak
    
    Scenario: Student challenge kuni boshlagandan keyin berilgan limitdan oshirmaslik
    When Student ruxsat berilgan challenge kunini bosdi
    Then Bazada startedAt ayni damdagi vaqtga o'zgarishi kerak
    And Bazada statusHistoryda bitta element paydo bo'lishi kerak statusi "STARTED" bo'lgan
    And "10" soniyada challenge kun yopilishi kerak

    Scenario: Student challenge kuni kechki 23:59:59 da boshlasa ham unga belgilangan vaqt bo'yicha ruxsat berish
    When Student ruxsat berilgan challenge kunini bosdi
    Then Bazada startedAt ayni damdagi vaqtga o'zgarishi kerak
    And Studentda 00:00:01 da ham javob yuborish imkoni bo'lishliligi kerak
    
    Scenario: Studentlarning kunlik LeaderBoardini aniqlash
    Scenario: Studentlarning haftalik LeaderBoardini aniqlash
    Scenario: Studentlarning oylik LeaderBoardini aniqlash
    Scenario: Studentlarning ruxsat berilmagan challenge kuniga javob yubormasligini tekshirish
    Scenario: Studentlarning ruxsat berilgan kunga ruxsat rostdan ham berilganligini tekshirish
    Scenario: Student challenge savollariga javob berilib bo'lgandan keyin qayta javob bera olmasligini tekshirish
    Scenario: Student bir nechta javob yubora olmasligini tekshirish