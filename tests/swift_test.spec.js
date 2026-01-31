const { test, expect } = require('@playwright/test');

/**
 * SLIIT IT3040 ITPM Assignment 1
 * Singlish to Sinhala Conversion - Complete Suite with Failing Negative Cases
 */

test.describe('Singlish Conversion Project', () => {

  test.slow();

  const testCases = [
    { id: '001', input: 'mama gedhara yanavaa', expected: 'මම ගෙදර යනවා' },
    { id: '002', input: 'api kaeema kanna yana gaman kathaa karanavaa ee sambanDhava ', expected: 'අපි කෑම කන්න යන ගමන් කතා කරනවා ඒ සම්බන්ධව'},

    { id: '003', input: 'adha api office yanna kalin Zoom meeting ekak thiyenavaa.meeting eken passe documents tika karalaa manager ta evanna oonee.vahina nisaa traffic thiyenavaa ee nisa api office enna late venna puluvan.ehema unoth WhatsApp message ekak dhaanna', expected: 'අද අපි office යන්න කලින් Zoom meeting එකක් තියෙනවා.meeting එකෙන් පස්සෙ documents ටික කරලා manager ට එවන්න ඕනේ.වහින නිසා traffic තියෙනවා ඒ නිස අපි office එන්න late වෙන්න පුලුවන්.එහෙම උනොත් WhatsApp message එකක් දාන්න'},


    { id: '004', input: 'vahaama enna',expected: 'වහාම එන්න' },
    { id: '005', input: 'Zoom meeting ekak adha thiyenavaa', expected: 'Zoom meeting එකක් අද තියෙනවා' },
    { id: '006', input: 'api trip ekak yanavaa Galle valata', expected: 'අපි trip එකක් යනවා Galle වලට'},
    { id: '007', input: 'mata university vaeda vageema assignment vaeda godak thiyenavaa ee nisa mama adha raeeta hariyata study karanna hithan inne. ', expected: 'මට university වැඩ වගේම assignment වැඩ ගොඩක් තියෙනවා ඒ නිස මම අද රෑට හරියට study කරන්න හිතන් ඉන්නේ.'},


    { id: '008', input: 'oya enavaanam mama balan innavaa', expected: 'ඔය එනවානම් මම බලන් ඉන්නවා' },

    { id: '009', input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?', expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?' },

    { id: '010', input: 'adha free dha?', expected: 'අද free ද?' },

    { id: '011', input: 'heta enna puluvan', expected: 'හෙට එන්න පුලුවන්' },

    { id: '012', input: 'hari hodhayi', expected: 'හරි හොදයි' },

    { id: '013', input: 'parissamen yanna', expected: 'පරිස්සමෙන් යන්න' },

    { id: '014', input: 'mama ehema karanne naehae', expected: 'මම එහෙම කරන්නේ නැහැ' },

    { id: '015', input: 'project vaeda tika adha complete karalaa heta submit karanna puluvan', expected: 'project වැඩ ටික අද complete කරලා හෙට submit කරන්න පුලුවන්' },


    { id: '016', input: 'adha poddak aegata amaaruyi ee nisaa mama  late venna puluvan', expected: 'අද පොඩ්ඩක් ඇගට අමාරුයි ඒ නිසා මම  late වෙන්න පුලුවන්' },


    { id: '017', input: 'oyaata puluvannam heta meeting eka afternoon dhaaganna', expected: 'ඔයාට පුලුවන්නම් හෙට meeting එක afternoon දාගන්න' },



    { id: '018', input: 'mee file eka download karanna kalin instructions tika kiyavalaa balanna', expected: 'මේ file එක download කරන්න කලින් instructions ටික කියවලා බලන්න' },


    { id: '019', input: 'mee software eka install karanna kalin system requirements tika check karalaa documentation eka kiyavalaa balanna mokadha compatibility issues thiyenavanam errors enna puluvan', expected: 'මේ software එක install කරන්න කලින් system requirements ටික check කරලා documentation එක කියවලා බලන්න මොකද compatibility issues තියෙනවනම් errors එන්න පුලුවන්' },


    { id: '020', input: 'mama iiyee order karapu item eka adha venakan receive unee naehae  ee nisaa delivery status eka check karalaa mata update ekak dhenna puluvannam godak hodhayi', expected: 'මම ඊයේ order කරපු item එක අද වෙනකන් receive උනේ නැහැ  ඒ නිසා delivery status එක check කරලා මට update එකක් දෙන්න පුලුවන්නම් ගොඩක් හොදයි' },


    { id: '021', input: 'last year experience valin mama godak dhee igena gaththaa ee nisaa adha decisions gannakota kalin vidhihata vadaa hodha vidhihata hithalaa karanna try karanavaa', expected: 'last year experience වලින් මම ගොඩක් දේ ඉගෙන ගත්තා ඒ නිසා අද decisions ගන්නකොට කලින් විදිහට වඩා හොද විදිහට හිතලා කරන්න try කරනවා' },


    { id: '022', input: 'oyaa kiyapu dhee  hariyata theerum gaththadha kiyalaa confirm karaganna ahanne ?', expected: 'ඔයා කියපු දේ  හරියට තේරුම් ගත්තද කියලා confirm කරගන්න අහන්නෙ ?' },

    { id: '023', input: 'ikmanin kiyanna', expected: 'ඉක්මනින් කියන්න' },

    { id: '024', input: 'adha udhee meeting ekak thiyenavaa ee nisaa mama kalinma office yanna oonee', expected: 'අද උදේ meeting එකක් තියෙනවා ඒ නිසා මම කලින්ම office යන්න ඕනේ' },


    // --- NEGATIVE FUNCTIONAL CASES (10 SCENARIOS) ---
    { id: '025', input: 'hari da!!!???', expected: 'හරි ද?' }, 
    { id: '026', input: 'meeting eka goooood kiyala hithenavaa', expected: 'meeting එක හොඳයි කියලා හිතෙනවා' }, 
    { id: '027', input: 'pls doc eka asap evnn', expected: 'pls doc එක' },
    { id: '028', input: 'mamagedharayanavaa', expected: 'මම ගෙදර යනවා' },
    { id: '029', input: 'meeting eka three ta start venavaa 3pm', expected: 'meeting එක three' },
    { id: '030', input: 'ADHA meeting EKA ONLINE', expected: 'අද meeting එක online' },
    { id: '031', input: 'documant eka adha submmit karanna', expected: 'documant එක' },
    { id: '032', input: 'mama iiyee gedhara giyaa saha adha yanne naehae kiyala hithanavaa', expected: ' ම ඊයේ ගෙදර ගියා' },
    { id: '033', input: 'mama tomorrow gedhara giyaa yesterday', expected: 'මම tomorrow ගෙදර ගියා' },
    { id: '034', input: 'mama#yanawa*ada', expected: 'මම#යනවා*අද' }
  ];



  test.beforeEach(async ({ page }) => {
    await page.goto('https://swifttranslator.com/');
  });

  for (const data of testCases) {
    const fullCaseId = parseInt(data.id) <= 24 ? `Pos_Fun_${data.id}` : `Neg_Fun_${data.id}`;

    test(`${fullCaseId}: ${data.input.substring(0, 30)}...`, async ({ page }) => {
      const inputArea = page.locator('textarea').first();
      const outputArea = page.locator('.whitespace-pre-wrap.bg-slate-50').first();

      await inputArea.click();
      await page.keyboard.press('Control+A');
      await page.keyboard.press('Backspace');
      await page.waitForTimeout(300);

      await inputArea.pressSequentially(data.input, { delay: 45 });
      await page.keyboard.press('Space');

      
      await expect(outputArea).toContainText(/[අ-ෆa-zA-Z]/, { timeout: 35000 });
      await page.waitForTimeout(4000); 

      const resultText = await outputArea.innerText();
      console.log(`ID: ${fullCaseId} | Actual Result: ${resultText}`);
      
      
      expect(resultText.trim()).toBe(data.expected.trim());
    });
  }

  // --- UI TEST (Succeeds) ---
  test('Pos_UI_0001: Clear Button UI Functionality', async ({ page }) => {
    const inputField = page.locator('textarea').first();
    const clearBtn = page.locator('button:has-text("Clear")');
    
    await inputField.fill('Reset verification for UI');
    await page.waitForTimeout(500);
    
    await clearBtn.waitFor({ state: 'visible' });
    await clearBtn.click();
    
    const fieldValue = await inputField.inputValue();
    expect(fieldValue).toBe('');
    
    console.log('UI test successful: Clear button clears the form.');
  });

});