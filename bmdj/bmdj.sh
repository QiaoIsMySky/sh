apt update
apt install openssh -y
pkg install termux-auth -y
sshd -p 6666
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/termux-packages-24 stable main@' $PREFIX/etc/apt/sources.list
sed -i 's@^\(deb.*games stable\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/game-packages-24 games stable@' $PREFIX/etc/apt/sources.list.d/game.list
sed -i 's@^\(deb.*science stable\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/science-packages-24 science stable@' $PREFIX/etc/apt/sources.list.d/science.list
apt update
apt install curl -y
apt install wget -y
apt install perl -y
apt install moreutils -y
apt install git -y
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs
wget -q https://github.com/RikudouPatrickstar/jd-base/raw/v3/onekey-install.sh -O onekey-jd-base.sh && chmod +x onekey-jd-base.sh && ./onekey-jd-base.sh
