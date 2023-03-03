const f= document.getElementById("data");
function printDocument(){
    const backup=document.body.innerHTML;
    document.body.innerHTML=`<main>${document.querySelector("main").innerHTML}</main>`;
    window.print();
}
f.addEventListener('submit',(e)=>{
    e.preventDefault();
    const ab=document.getElementById("browser").value;
    const name=document.getElementById('name').value;
    const add=document.getElementById("address").value;
    const feet=document.getElementById("feet").value;
    const rate=document.getElementById('rate').value;
    const date= new Date();
    const print =document.createElement('button');
    print.classList.add('button');
    print.textContent='print';
    const btnsection= document.querySelector('.btn');
    btnsection.innerHTML="";
    btnsection.appendChild(print);
    print.addEventListener('click',printDocument);
    document.querySelector("main").innerHTML=`
    <div class="logo"><img src="logo.svg" alt=""></div>
<h2 class="company-name">
Giant Waterproofing Co.
</h2>
<div class="reg-date">
    <div class="reg-num">GWC/R/5526/2023</div>
    <div class="date"><span class="dd">${(date.getDate()<10)?'0'+date.getDate():date.getDate()}</span>.<span class="mm">${((date.getMonth()+1)<10)?'0'+(date.getMonth()+1):date.getMonth()+1}</span>.<span class="yyyy">${date.getFullYear()}</span></div>
</div>
<div class="name-add">
    <h3 class="name">${ab+' '+name}</h2>
    <h3 class="address">${add}</h2>
</div>
<h4 class="title">Re: Waterproofing on Roof</h2>
<h4 class="salutation">Dear sir,</h2>
<p class="msg">
<p style="margin-top:20px;">
    We thank you very much for your kind inquiry about waterproofing on the Roof area. <strong>Giant</strong> is a leading waterproofing expert assuring the right waterproofing solutions for <strong>leak-free homes </strong>
    with the best waterproofing <strong>services in India</strong>.
</p>
<p style="margin-top:20px;">
    <strong> Giant’s 3 Layer Waterproofing treatment </strong>is a Waterproofing technique designed and
    developed for a
    complete <strong>waterproofing solution with a leakage-free warranty for 5 years.</strong> This system
    can be applied for
    Waterproofing on RCC surfaces, Side Walls, Asbestos sheets, Tin Sheets, Water Tanks, etc
</p>
<h3 style="margin-top:20px; text-decoration: underline;
">Description of Chemicals:</h3>
<dl class="chem-des">
    <ol>

        <li>
            <dt>
                RainPrime :
            </dt>
            <dd><strong>RainPrime is an acrylic co-polymer emulsion supplied as a ready-to-use bonding agent</strong> with superior wet adhesion and universal compatibility. It is also a versatile latex that can be used as a cement modifier for spalled concrete slabs, overhangs, beams, columns, and floors. It is also used as a bonding primer and porosity filler with RainSiller during waterproofing applications.</dd>
        </li>

        <li>
            <dt>
                SafeCoat:
            </dt>
            <dd>
                <strong>Giant SafeCoat</strong> is a high-performance elastomeric roof coating designed to be used along with RainSiller. It is highly UV durable and has a service life of up to 10 years. It features the ability to bridge cracks up to 1.5 mm. In combination with RainSiller, SafeCoat provides a waterproofing system that is a combination of a penetrative barrier with a seamless top coat resulting in superior performance.
            </dd>
        </li>
    </ol>
</dl>
</p>
<h2 class="procedure">Waterproofing with Procedure (3 layer)</h2>
<p class="description">
<ol style="margin-left: 50px; line-height:1.8rem; font-weight:600; font-style:italic;">
    <li>Clean the surface by rubbing with a wire brush & other mechanical tools to remove dust and other
        loose materials. Repairing of Cracks work will be carried out as per requirement on the Roof</li>
    <li>Apply 1st coating of Giant RainPrime with Cement.</li>
    <li>Apply 2nd coating of Giant SafeCoat with dilution.</li>
    <li>Apply 3rd coating of Giant SafeCoat without dilution.</li>
</ol>
</p>
<h2 class="area-detail-heading">Area Details Provided By Candidate</h2>
<p class="area-details">
    Working area <strong class="area"> ${feet} </strong>Sq fit. (approx.) of treated place should be calculated as per actual or as per site in charge direction.
</p>
<h2 class="Rate-heading">Rate:</h2>
<p class="Rate-details">
    Rs <strong class="rate">${rate}</strong> per sq fit.(Rates are inclusive Chemicals, mechanical tools, Labor, & Supervision etc)
</p>
<h2 class="total-amount" style="border: 1px solid blue; display:inline-block; padding: 10px;">Total Amount: <span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate} </span>=<span class="total">&#x20B9;${feet*rate}</span></h2>

<h3 style="color: red; margin: 50px 0; ">Note:</h3>
<p style="border:1px solid red; padding:15px;">All details provided by the candidate via telecommunication are considered in this document. If any changes are found while measuring the area on site, then that area will be considered in the contract and the amount will be changed accordingly.</p>
<h3 style="margin-top: 40px; text-align:center;">Product for Terrace Waterproofing
    Area <span class="total">${feet}</span>.ft (Approx.)
</h3>
<table border="1">
    <thead>
        <tr>
            <td>S.No</td>
            <td><strong>Product</strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td><strong>RainPrime</strong></td>
        </tr>
        <tr>
            <td>2</td>
            <td><strong>SafeCoat</strong></td>
        </tr>
        <tr>
            <td>3</td>
            <td><strong>Cement</strong></td>
        </tr>
    </tbody>
</table>
<div class="t-and-d">
  <h2>Terms and Conditions</h2>
    <p>
        <dl>
            <ol>
                <li>
                    <dt>Taxes:</dt>
                    <dd><strong>18 % GST Extra.</strong></dd>
                </li>
                <li>
                    <dt>Payment Terms:</dt>
                    <dd>Work to commence against firm work order along with <strong>90 % Advance</strong>  along with work order. A balance payment of 10% is to be made immediately upon completion of work.</dd>
                </li>
                <li>
                    <dt>Transport Fee Extra</dt>
                    <dd></dd>
                </li>
                <li>
                    <dt>Validity:</dt>
                    <dd>Our quotation is valid for 12 days from this date and the validity thereof is subject to our final confirmation.</dd>
                </li>
                <li>
                    <dt>General:</dt>
                    <dd>We need your co-operation to provide us safe space for storing our materials, during the work.</dd>
                </li>
                <li>
                    <dt>Kindly note that the actual measurement will be in line with the Industrial standards.</dt>
                    <dd>The above work shall be completed as per the schedule mutually discussed and agreed upon, to avoid inconvenience place the order well in advance.</dd>
                </li>
                <li>
                    <dt>Completion:</dt>
                    <dd>
                        The above work shall be completed as per the schedule mutually discussed and agreed upon, to avoid inconvenience place the order well in advance.
                        <ol>
                            <li>
                                The work order and advance must be allowed 15 working days before the date of commencement of work. To arrange the materials and utilities.
                            </li>

                            <li>
                                Kindly ensure the work area is available on time so that our workmen’s idle and other inconveniences in service can be avoided.
                            </li>
                        </ol>
                    </dd>
                </li>
                <li>
                    <dt>Water and Electricity:</dt>
                    <dd>Necessary construction water and power required for the execution of our work should be provided free of cost by you.</dd>
                </li>
            </ol>
            <h4 style="border:1px solid blue; padding: 20px; margin-top:20px;">Warranty: 5 Years (from the date of completion of the work )
               <b>T&C Apply</b> </h4>
            
        </dl>
    </p>
    <div class="company-details">
        <h2>Bank Account Details[HDFC Bank]</h2>
        <h3>Name: Giant WaterProofing Co.</h3>
        <h3>A/C No: 50200069668033</h3>
        <h3>IFSC Code: HDFC0005386</h3>
    </div>
    <div class="qr-code">
        <img src="qr.jpg" alt="">
    </div>
    <div class="contact">
        <h3>Contact US</h3>
        <p class="contact-details">
            Name: <span class="name">Giant Sales Team</span>
            Mobile: <span class="mobile">+917470612116</span>
            Email: <span class="email">info@giant.com.co</span>
            Website: <span class="website">www.giantwaterproofing.in</span>
        </p>
    </div>
    </div>
    `;
});
