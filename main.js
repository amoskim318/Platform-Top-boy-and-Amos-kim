function toggleDrawer() {
      const drawer = document.getElementById("drawer");
      const overlay = document.getElementById("overlay");
      drawer.classList.toggle("open");
      overlay.classList.toggle("active");
    }
    
    document.getElementById('downloadBtn').addEventListener('click', function () {
      // Create a temporary <a> element
      const a = document.createElement('a');
      a.href = '/test.py'; // Path to your file
      a.download = 'test.py'; // Name the file should be downloaded as
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
