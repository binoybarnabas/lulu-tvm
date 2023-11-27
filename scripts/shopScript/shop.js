var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var url = 'https://fakestoreapi.com/products/categories';
var getData = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("Failed to fetch data. Status: ".concat(response.status));
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                // Assuming .shop-list exists in your HTML
                // console.log(data);    
                data.forEach(function (category) {
                    var shopList = document.querySelector('.shop-list');
                    var categoryShow = createCategory(category);
                    shopList.appendChild(categoryShow);
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error fetching data:', error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
getData();
console.log(document.cookie);
var createCategory = function (category) {
    var h2 = document.createElement('h2');
    h2.classList.add('category', 'pop-out');
    h2.textContent = category;
    h2.addEventListener('click', function () {
        openCategory(category);
    });
    return h2;
};
var openCategory = function (category) {
    if (category === 'electronics')
        window.location.href = "shopElectronics.html?path=".concat(category);
    else if (category === 'jewelery')
        window.location.href = "shopJewelery.html?path=".concat(category);
    else if (category === 'men\'s clothing')
        window.location.href = "shopMenClothing.html?path=".concat(category);
    else
        window.location.href = "shopWomenClothing.html?path=".concat(category);
};
var sessionUser = localStorage.getItem('userCache');
if (sessionUser == null) {
    console.log("inside userCache");
    var dropdownContainer = document.getElementById("dropdownContainer");
    dropdownContainer.style.display = 'none';
}
else {
    var dropdownToggle = document.getElementById("dropdownToggle");
    dropdownToggle.style.display = 'block';
    dropdownToggle.textContent = sessionUser;
    console.log(sessionUser);
}
document.addEventListener("DOMContentLoaded", function () {
    var dropdownContainer = document.getElementById("dropdownContainer");
    var dropdownToggle = document.getElementById("dropdownToggle");
    var dropdownMenu = null; // Track the dropdown menu
    // Create a function to handle the click event
    function handleDropdownClick() {
        var _a;
        // If the dropdown menu exists, remove it and return
        if (dropdownMenu) {
            dropdownContainer.removeChild(dropdownMenu);
            dropdownMenu = null;
            return;
        }
        // Create the dropdown menu 
        dropdownMenu = document.createElement("div");
        dropdownMenu.classList.add("dropdown-menu", "show");
        // Create the logout option
        var logoutOption = document.createElement("a");
        logoutOption.classList.add("dropdown-item");
        logoutOption.href = "#";
        logoutOption.textContent = "Logout";
        logoutOption.addEventListener("click", function () {
            // Handle the logout logic here
            // alert("Logout clicked!");
            $('#logoutConfirmationModal').modal('show');
        });
        // Add click event listener to confirm logout button in the modal
        (_a = document.getElementById('confirmLogoutBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            // Handle the logout logic here
            // Redirect to home.html
            // Replace "yourCookieName" with the actual name of your cookie
            document.cookie = "sessionUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            localStorage.removeItem('userCache');
            console.log("cookie removed : " + document.cookie);
            window.location.href = '../../pages/shopPage/shopPageLogin.html';
        });
        // Append the logout option to the dropdown menu
        dropdownMenu.appendChild(logoutOption);
        // Append the dropdown menu to the container
        dropdownContainer.appendChild(dropdownMenu);
    }
    // Add the click event listener to the container
    dropdownToggle.addEventListener("click", handleDropdownClick);
});
