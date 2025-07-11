<script>
        function toggleTurma(btn) {
            const info = btn.nextElementSibling;
            const span = btn.querySelector('span');
            btn.classList.toggle('active');
            info.classList.toggle('hidden');
            span.textContent = info.classList.contains('hidden') ? '▼' : '▲';
        }

        document.addEventListener("DOMContentLoaded", function() {
            document.querySelectorAll('.turma-info').forEach(function(div) {
                div.classList.add('hidden');
            });
        });
    </script>
