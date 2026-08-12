const activityEl = document.getElementById('activity')
const btnEl = document.getElementById('get-activity-btn')

function getActivity() {
   fetch("https://apis.scrimba.com/bored/api/activity")
   .then(response => response.json())
   .then(data => {
      console.log(data)
      document.getElementById('activity').textContent =  data.activity
      document.getElementById('title').textContent = "🦾 HappyBot🦿"
      document.querySelector("main").classList.add("fun")
   })
}

btnEl.addEventListener('click', getActivity)
