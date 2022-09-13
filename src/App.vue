<template>

<div class="container-wrapper">
<!-- First Component -->
<div class="container-fluid">
    <nav>
      <div class="row h-100 align-items-center">
        <div class="col d-flex justify-content-start nav-wrapper">
          <div class="dropdown">
            <a
              class="select-category-btn dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ selectedCategory }}
              <i class="fa-solid fa-chevron-down"></i>
            </a>

            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" @click="setCategory('Food')">
                  Food
                </button>
              </li>
              <li>
                <button class="dropdown-item" @click="setCategory('Houseware')">
                  Houseware
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  @click="setCategory('Entertainment')"
                >
                  Entertainment
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="col d-flex justify-content-end">
          <div class="expense-btn-wrapper">
            <button @click="addNewExpense" class="add-expense-btn">
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div v-if="selectedCategory !== 'Select'" class="content">
      <div class="row">
        <div class="col p-0">
          <form id="expense-form">
            <div class="expense-input-fields">
              <div class="row">
                <div class="col-9">
                  <!-- This is a dynamic input field -->

                  <div v-for="key in nameInputCount" :key="key">
                    <input
                      type="text"
                      class="form-control expense-title mt-2"
                      placeholder="Expense name"
                      v-model="nameInputValues['dynamic-field' + key]"
                      :id="key"
                    />
                  </div>
                </div>
                

                <div class="col">
                  <!-- This is a dynamic input field -->
                  <div class="input-box" v-for="key in priceInputCount" :key="key">

                    
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      max="2"
                      class="form-control expense-price mt-2"
                      placeholder="€0.00"
                      v-model="priceInputValues['dynamic-field' + key]"
                      :id="key"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="seperator"></div>
          </form>
        </div>
      </div>

      <div class="content-footer">
        <div class="row">
          <div class="col"><h3>Total</h3></div>
          <div class="col d-flex justify-content-end">
            <p>€{{ parseFloat(totalSum).toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- Second Component -->
<div v-for="key in homewareComponents" :key="key">
    <nav>
      <div class="row h-100 align-items-center">
        <div class="col d-flex justify-content-start nav-wrapper">
          <div class="dropdown">
            <a
              class="select-category-btn dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ homSelectedCategory }}
              <i class="fa-solid fa-chevron-down"></i>
            </a>

            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" @click="setHomewareHeaderCategory('Food')">
                  Food
                </button>
              </li>
              <li>
                <button class="dropdown-item" @click="setHomewareHeaderCategory('Houseware')">
                  Houseware
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  @click="setHomewareHeaderCategory('Entertainment')"
                >
                  Entertainment
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="col d-flex justify-content-end">
          <div class="expense-btn-wrapper">
            <button @click="addNewHomewareExpense" class="add-expense-btn">
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div v-if="homSelectedCategory !== 'Select'" class="content">
      <div class="row">
        <div class="col p-0">
          <form id="expense-form">
            <div class="expense-input-fields">
              <div class="row">
                <div class="col-9">
                  <!-- This is a dynamic input field -->
                  <div v-for="key in homewareNameInputCount" :key="key">
                    <input
                      type="text"
                      class="form-control expense-title mt-2"
                      placeholder="Expense name"
                      v-model="homewareNameInputValues['dynamic-field' + key]"
                      :id="key"
                    />
                  </div>
                </div>

                <div class="col">
                  <!-- This is a dynamic input field -->
                  <div class="input-box" v-for="key in homewarePriceInputCount" :key="key">
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      max="2"
                      class="form-control expense-price mt-2"
                      placeholder="€0.00"
                      v-model="homewarePrices['dynamic-field' + key]"
                      :id="key"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="seperator"></div>
          </form>
        </div>
      </div>

      <div class="content-footer">
        <div class="row">
          <div class="col"><h3>Total</h3></div>
          <div class="col d-flex justify-content-end">
            <p>€{{ parseFloat(homewareTotalSum).toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div> 

<!-- Third Component -->

<div v-for="key in entComponents" :key="key">
    <nav>
      <div class="row h-100 align-items-center">
        <div class="col d-flex justify-content-start nav-wrapper">
          <div class="dropdown">
            <a
              class="select-category-btn dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ entSelectedCategory }}
              <i class="fa-solid fa-chevron-down"></i>
            </a>

            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" @click="setEntHeaderCategory('Food')">
                  Food
                </button>
              </li>
              <li>
                <button class="dropdown-item" @click="setEntHeaderCategory('Houseware')">
                  Houseware
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  @click="setEntHeaderCategory('Entertainment')"
                >
                  Entertainment
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="col d-flex justify-content-end">
          <div class="expense-btn-wrapper">
            <button @click="addNewEntExpense" class="add-expense-btn">
              Add Expense
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div v-if="entSelectedCategory !== 'Select'" class="content">
      <div class="row">
        <div class="col p-0">
          <form id="expense-form">
            <div class="expense-input-fields">
              <div class="row">
                <div class="col-9">
                  <!-- This is a dynamic input field -->
                  <div v-for="key in entNameInputCount" :key="key">
                    <input
                      type="text"
                      class="form-control expense-title mt-2"
                      placeholder="Expense name"
                      v-model="entNameInputValues['dynamic-field' + key]"
                      :id="key"
                    />
                  </div>
                </div>

                <div class="col">
                  <!-- This is a dynamic input field -->
                  <div class="input-box" v-for="key in entPriceInputCount" :key="key">
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      max="2"
                      class="form-control expense-price mt-2"
                      placeholder="€0.00"
                      v-model="entPrices['dynamic-field' + key]"
                      :id="key"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="seperator"></div>
          </form>
        </div>
      </div>

      <div class="content-footer">
        <div class="row">
          <div class="col"><h3>Total</h3></div>
          <div class="col d-flex justify-content-end">
            <p>{{ parseFloat(entTotalSum).toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div> 

</div>

  <footer>
      <div class="row h-100 align-items-center">
        <div class="col d-flex justify-content-start">
          <h3>
            Total: <span> €{{ parseFloat(totalAll).toFixed(2) }}</span>
          </h3>
        </div>
        <div class="col d-flex justify-content-end">
          <button class="add-receipt-btn" @click="addNewReceipt">
            Add receipt
          </button>
        </div>
      </div>
  </footer>

</template>

<script>

export default {

  name: "App",

  data() {
    return {
      
      // Some check for our custom dropdown menu
      selectedCategory: "Select",
      homSelectedCategory: "Select",
      entSelectedCategory: "Select",

      // Just making our other components visable using variables below
      homewareComponents: 0,
      entComponents:0,

      // Below are our dynamic input fields for each component

      // Food input field count & input values
      nameInputCount: 1, // Total number of input fields
      nameInputValues: {}, // Input field object values
      
      // Dynamic Expense Price input fields & Values
      priceInputCount: 1, // Total number of input fields
      priceInputValues: {}, // Input field object values
      
      // Houseware input field count & input values
      homewareNameInputCount: 1, // Total number of input fields
      homewareNameInputValues: {}, // Input field object values

      homewarePriceInputCount: 1, // Total number of input fields
      homewarePrices: {}, // Input field object values

      // Enterteiment input field count & input values
      entNameInputCount: 1, // Total number of input fields
      entNameInputValues: {}, // Input field object values

      entPriceInputCount: 1, // Total number of input fields
      entPrices: {}, // Input field object values


    };
    

    
  },
  computed: {
    
    // Computed properties
    // Watching and outputing total sum of the category & final sum
    totalSum: function () {
      var sum = 0;
      var items = this.priceInputValues;

      for (var i in items) {
        sum += items[i];
      }
      return sum;
    },

    homewareTotalSum: function() {
      var sum = 0;
      var items = this.homewarePrices;
      
      for (var i in items) {
        sum += items[i];
      }
      return sum;

    },

    entTotalSum: function() {
      var sum = 0;
      var items = this.entPrices;
      
      for (var i in items) {
        sum += items[i];
      }
      return sum;

    },

    totalAll: function() {
      return this.totalSum + this.homewareTotalSum + this.entTotalSum;
    }
  },
  
  methods: {

    setCategory(value) {
      this.selectedCategory = value;
    },

    setHomewareHeaderCategory(value) {
      this.homSelectedCategory = value;
    },

    setEntHeaderCategory(value) {
      this.entSelectedCategory = value;
    },

    addNewExpense() {
      if (this.$selectedCategory !== "Select") {
        this.nameInputCount++;
        this.priceInputCount++

      }
    },

    addNewHomewareExpense(){
      if (this.homSelectedCategory !== "Select") {
        this.homewareNameInputCount++
        this.homewarePriceInputCount++

      }
    },

    addNewEntExpense(){
      if (this.entSelectedCategory !== "Select") {
        this.entNameInputCount++
        this.entPriceInputCount++

      }
    },

    addNewReceipt() {
      if(this.homewareComponents === 0){
        this.homewareComponents = 1;   
      }
      
      else if(this.homewareComponents === 1 && this.entComponents === 0 ) {
        this.entComponents = 1;
      }
   
    },
  },
};

</script>
